<script lang="ts">
    import { goto } from "$app/navigation";
    export let imageloaded:boolean;
    export let positionloaded:boolean;

    function handle(){
        if (!imageloaded){
            localStorage.removeItem('image');
        }
        if (!positionloaded){
            localStorage.removeItem('position');
        }
        goto("/use")
    }

</script>

<div class="container">
    {#if imageloaded || positionloaded}
    <button on:click={handle} class="btn btn-warning">let's save it !</button>
    {:else}
    <div class="alert">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>Input position or picture to proceed</span>
      </div>
    {/if}
</div>

<style lang="postcss">
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
        margin-bottom: 2rem;
        border-radius: 20px;
        padding: 20px;
        color: white;
    }
</style>