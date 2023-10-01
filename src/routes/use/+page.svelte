<script lang="ts">
    import { Image } from '@svelteuidev/core';
    import { Button } from '@svelteuidev/core';
    import { onMount } from 'svelte';
    import { Title } from '@svelteuidev/core';
    import { goto } from '$app/navigation';
    //width={window.innerWidth} height={0.6*window.innerHeight}
    
    let alreadySaved:boolean = false;

    onMount(() => {
        //check if a image is stored in local storage, plus its location
        if (localStorage.getItem('image') !== null && localStorage.getItem('location') !== null) {
            alreadySaved = true;
        }
    })

    function handleClick() {
        alert('Button clicked!');
    }


</script>
{#if alreadySaved}
<Image radius='md' src="https://picsum.photos/200/300" alt="Random image" />
{:else}
<Title order={4}>looks like you have never saved your car last position</Title>
{/if}
<div class='buttons'>
<Button on:click={()=>goto("/save")} variant='gradient' gradient={{from: 'teal', to: 'blue', deg: 60}}>
    <i class="fa-solid fa-location-pin"></i><span class="narrow-space"></span> Save the location
</Button>
{#if alreadySaved}
<Button on:click={handleClick} variant='gradient' gradient={{from: 'orange', to: 'red', deg: 45}}>
	<i class="fa-solid fa-location-crosshairs"></i><span class="narrow-space"></span> Waypoint
</Button>
{/if}
</div>

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
</style>