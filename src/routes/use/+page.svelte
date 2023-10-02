<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    //width={window.innerWidth} height={0.6*window.innerHeight}
    
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
{#if savedPosition}
<div class="hea1">Your car is parked at {savedPosition}</div>
{/if}
{#if savedImage}
<img src={savedImage} alt="Your parking spot" />
{/if}
{:else}
<h4>looks like you have never saved your car last position</h4>
{/if}

<div class='buttons'>
{#if alreadySaved}
<button on:click={()=>goto("/save")}>
    <i class="fa-solid fa-location-pin"></i><span class="narrow-space"></span> Change the location
</button>
<button on:click={handleClick}>
	<i class="fa-solid fa-location-crosshairs"></i><span class="narrow-space"></span> Waypoint
</button>
{:else}
<button on:click={()=>goto("/save")}>
    <i class="fa-solid fa-location-pin"></i><span class="narrow-space"></span> Save the location
</button>
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

    img {
        width: 80%;
        height: 80%;
        object-fit: cover;
    }
</style>