<script lang="ts">
    import { goto } from "$app/navigation";
    export let imageloaded;
    export let positionloaded;

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
    <button on:click={handle} class="button success">let's save it !</button>
    {:else}
    <button disabled class="button non">input position or picture to proceed</button>
    {/if}
</div>

<style>

    .button {
        display: flex;  
        flex-direction: row;
        justify-content: center;
        margin: 10px;
        border: 1px solid white;
        border-radius: 20px;
        padding: 20px;
        color : black;
        width: auto;
        font-size: 20px;
    }
    .success {  
        background-color: orange;
    }
    .non {
        background-color: transparent;
    }

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