<script lang="ts">
import { Title } from '@svelteuidev/core';
import { goto } from '$app/navigation';
    import { page } from '$app/stores';
</script>

<body>
{#if $page.url.pathname !== '/' }
<button class="title" on:click={()=>goto("/")}>
    <Title order={1} variant='gradient' gradient={{from: 'blue', to: 'red', deg: 45}}>locar</Title>
    <Title order={2}>never forget where you parked your car</Title>
</button>
{/if}
<slot/>
</body>


<style>

@import '@fortawesome/fontawesome-free/css/all.css';
body {
    background-color: #f5f5f5;
    width: 100vw;
    height: 100vh;
    color: #333;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

button {
    background: none;
    border: none;
    cursor: pointer;
    outline: inherit;
}

.title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
        margin-bottom: 2rem;
}

</style>