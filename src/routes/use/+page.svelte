<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import NProgress from "nprogress";
    
    let loading = true; 
    let alreadySaved = false;
    let savedImage;
    let savedPosition;

    onMount(() => {
        //check if a image is stored in local storage, plus its location
        if (localStorage.getItem('image') !== null) {
            savedImage = localStorage.getItem('image');
            alreadySaved = true;
        }
        if (localStorage.getItem('position') !== null) {
            savedPosition = localStorage.getItem('position');
            alreadySaved = true;
        }
        loading = false;
    })

    function handleWaypoint() {
        NProgress.start();
        const isMobile = /Android|iOS|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);

        if (isMobile) {
            const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
            if (isiOS) {
                const [latitude, longitude] = savedPosition.split(';');
                const appleMapsURL = `https://maps.apple.com/?q=${latitude},${longitude}`;
                console.log(appleMapsURL);
                window.location.href = appleMapsURL;
            } else {
                const [latitude, longitude] = savedPosition.split(';');
                const googleMapsURL = `https://www.google.com/maps?q=${latitude},${longitude}`;
                window.location.href = googleMapsURL;
            }
        } else {
            alert('Navigation is only supported on mobile devices.');
        }
        NProgress.done();
    }

    function openFullScreen() {
        let w = window.open('about:blank');
        let image = new Image();
        image.src = savedImage;
        setTimeout(function(){
        w.document.write(image.outerHTML);
}, 0);
    }

</script>

<div class="flex flex-col justify-center items-center h-screen">
{#if loading}    
    <span class="loading loading-spinner loading-lg"></span>
{:else}

    {#if alreadySaved}
        {#if savedPosition}    
            <button class="btn btn-outline btn-success  w-2/3 mx-auto" on:click={handleWaypoint}>Waypoint to last location</button>
        {/if}
        {#if savedImage}
            <div class="container">
                <img src={savedImage} alt="Your parking spot" />
                <button on:click={openFullScreen} class="btn btn-active btn-secondary">See it in full screen</button>
            </div>
        {/if}
    {:else}
        <h4>looks like you have never saved your car last position</h4>
    {/if}

    <div class='buttons'>
        {#if alreadySaved}
            <button on:click={()=>goto("/save")} class="btn btn-outline w-2/3 mx-auto btn-info">Change the previous location</button>
        {:else}
            <button on:click={()=>goto("/save")} class="btn btn-outline btn-warning w-2/3 mx-auto">Save your location</button>
        {/if}
    </div>
{/if}
</div>

<style lang="postcss">
    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin-top: 1rem;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    img {
        width: 80%;
        height: 80%;
        object-fit: cover;
        border-radius: 20px;
        align-items: center;
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        font-size: 30px;
        color: white;
        width: 95vw;
        height: 60vh;
    }
</style>