<script lang="ts">
    import { goto } from "$app/navigation";
</script>

<div class="container">
    <button on:click={()=>goto("/use")} class="success">everything seems good, let's save it !</button>
</div>

<style>
    .success {  
        display: flex;  
        flex-direction: row;
        justify-content: center;
        margin: 10px;
        border: 1px solid white;
        border-radius: 20px;
        padding: 20px;
        color : black;
        width: auto;
        height: 60px;
        background-color: #be2596;
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