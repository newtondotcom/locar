<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import NProgress from "nprogress";
    import translate from '$lib/locales/translations';
    
    let loading = true; 
    let alreadySaved = false;
    let savedImage: string | null;
    let savedPosition: string | null;

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
            w.document.write("<style>body{margin:0px;}img{heigh:90vh;width:100vw;}a{position:absolute;top:10px;left:10px;background-color:purple;border-radius:20px;border:none;height:40px;width:40px;text-decoration:none;align-items:center;color:white;display:flex;align-items:center;justify-content:center;}</style>")
            w.document.write("<a href=\"https://locapark.org/use\"><</a>");
            w.document.write(image.outerHTML);
        }, 0);
    }

</script>

<div class="flex flex-col justify-center items-center h-screen sm:h-full sm:p-0 sm:-mt-24">
{#if loading}    
    <span class="loading loading-spinner loading-lg"></span>
{:else}
<div class="mb-4 sm:mt--2 mx-10 font-extrabold leading-none tracking-tight text-yellow-300 xl:text-6xl sm:text-7xl ">{translate("previouslocation")}</div>
    {#if alreadySaved}
        {#if savedPosition}    
            <button class="btn btn-outline btn-success  w-2/3 mx-auto sm:text-4xl sm:h-20 sm:-mb-10" on:click={handleWaypoint}>{translate("waypoint")}</button>
        {/if}
        {#if savedImage}
            <div class="container">
                <img src={savedImage} alt="Your parking spot" />
                <button on:click={openFullScreen} class="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:text-4xl p-40 sm:mt-4">See it in full screen</button>
            </div>
        {:else}
        <div class="h-1/3"/>
        {/if}
    {:else}
    <div class="mb-4 mx-10 text-4xl font-extrabold leading-none tracking-tight lg:text-6xl sm:text-4xl ">{translate("never")}</div>
    {/if}

    <div class='buttons sm:-mt-10'>
        {#if alreadySaved}
            <button on:click={()=>goto("/save")} class="btn btn-outline w-2/3 h-auto mx-auto btn-info sm:h-32"><div class="mb-4 mx-10 font-extrabold leading-none tracking-tight xl:text-6xl sm:text-4xl">{translate("change")}</div></button>
        {:else}
            <button on:click={()=>goto("/save")} class="btn btn-outline btn-warning w-2/3 mx-auto sm:h-24"><div class="mb-4 mx-10 font-extrabold leading-none tracking-tight xl:text-6xl sm:text-4xl ">{translate("save")}</div></button>
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