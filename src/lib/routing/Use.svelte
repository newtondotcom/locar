<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import NProgress from "nprogress";
    import translate from '$lib/locales/translations';
    export let goToSave : any;
    
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
            w.document.write("<a href=\"https://locapark.duckdns.org/\"><</a>");
            w.document.write(image.outerHTML);
        }, 0);
    }

</script>

<div class="flex flex-col justify-center items-center min-h-full">
{#if loading}    
    <span class="loading loading-spinner loading-lg"></span>
{:else}
    <div class="font-extrabold leading-none tracking-tight text-yellow-300 text-7xl absolute top-4 left-28">{translate("previouslocation")}</div>
    
    {#if alreadySaved}
        {#if savedPosition}    
            <button class="font-bold w-2/3 mx-auto text-4xl px-4 py-7 bg-gray-300 mt-[200px] rounded-xl" on:click={handleWaypoint}>{translate("waypoint")}</button>
        {/if}
        {#if savedImage}
            <div class="container">
                <img src={savedImage} alt="Your parking spot" />
                <button on:click={openFullScreen} class="inline-block rounded-xl border border-indigo-600 bg-indigo-600 px-12 py-3 font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 text-4xl p-40 mt-4">{translate("seefullscreen")}</button>
            </div>
        {:else}
            <div class="h-1/3"/>
        {/if}
    {:else}
    <div class="flex text-4xl font-extrabold leading-none tracking-tight mt-40">{translate("never")}</div>
    {/if}

    <div class="absolute bottom-[200px] left-0 flex-row justify-center items-center w-full">
        <div class="flex justify-center items-center w-full py-7 px-4">
            <button on:click={()=>goToSave()}
            class="bg-gray-300 rounded-3xl w-full py-7 px-4 font-extrabold leading-none tracking-tight text-4xl">
                {#if alreadySaved}{translate("change")}{:else}{translate("save")}{/if}
            </button>
        </div>  
    </div>     
{/if}
</div>  

<style lang="postcss">

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
        margin-top: 20px;
    }
</style>