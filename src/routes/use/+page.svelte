<script lang="ts">
    import { Image } from '@svelteuidev/core';
    import { Button } from '@svelteuidev/core';
    import { onMount } from 'svelte';
    import { Title } from '@svelteuidev/core';
    import { goto } from '$app/navigation';
    //width={window.innerWidth} height={0.6*window.innerHeight}
    
    let loading = true; 
    let alreadySaved = false;
    let savedImage;

    onMount(() => {
        //check if a image is stored in local storage, plus its location
        if (localStorage.getItem('image') !== null && localStorage.getItem('position') !== null) {
            savedImage = localStorage.getItem('image');
            alreadySaved = true;
        }
        loading = false;
    })

    function handleClick() {
        alert('Button clicked!');
    }
</script>

{#if loading}    
<div class="loader-container">
    <div class="loader"></div>
</div>

{:else}

{#if alreadySaved}
<Image radius='md' src={savedImage} alt="Your parking spot" />
{:else}
<Title order={4}>looks like you have never saved your car last position</Title>
{/if}

<div class='buttons'>
{#if alreadySaved}
<Button on:click={()=>goto("/save")} variant='gradient' gradient={{from: 'teal', to: 'blue', deg: 60}}>
    <i class="fa-solid fa-location-pin"></i><span class="narrow-space"></span> Change the location
</Button>
<Button on:click={handleClick} variant='gradient' gradient={{from: 'orange', to: 'red', deg: 45}}>
	<i class="fa-solid fa-location-crosshairs"></i><span class="narrow-space"></span> Waypoint
</Button>
{:else}
<Button on:click={()=>goto("/save")} variant='gradient' gradient={{from: 'teal', to: 'blue', deg: 60}}>
    <i class="fa-solid fa-location-pin"></i><span class="narrow-space"></span> Save the location
</Button>
{/if}
</div>

{/if}

<style>
    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin-top: 1rem;
    }

    .narrow-space {
            width: 10px;
            display: inline-block;
    }

    .loader-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .loader {
        border: 4px solid rgba(0, 0, 0, 0.2);
        border-top: 4px solid #007bff; /* Loader color */
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 2s linear infinite; /* Animation duration */
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>