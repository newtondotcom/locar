<script lang="ts">
    import "../app.css"
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import Toasts from '$lib/notifications/Toasts.svelte';

    import "nprogress/nprogress.css";
    import NProgress from "nprogress";
    import { navigating } from "$app/stores";
    import translate from "$lib/locales/translations";
    
    NProgress.configure({
        minimum: 0.16,
    });
    $: {
        if ($navigating) {
            NProgress.start();
        } else NProgress.done();
    }

</script>

<Toasts/>
<body>
    
{#if $page.url.pathname !== '/' }
<button class="title" on:click={()=>goto("/")}>
    <h1 class="sm:text-9xl">locapark</h1>
    <h2 class="sm:text-5xl">{translate("sub")}</h2>
</button>
{/if}
<slot/>
</body>


<style lang="postcss">
:global(html) {
    background-color: theme(colors.gray.100);
}

body {
    width: 100vw;
    height: 100vh;
    color: #333;
    background-color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
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
        margin-bottom: 1rem;
}

h1 {
    margin: 0;
    padding: 0;
    background: linear-gradient(to right, #f32170,
                    #ff6b08, #cf23cf, #eedd44);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}

h2 {
    margin: 0;
    padding: 0;
    background: linear-gradient(to right, #f32170,
                    #ff6b08, #cf23cf, #eedd44);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}

</style>