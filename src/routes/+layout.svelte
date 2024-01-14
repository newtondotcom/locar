<script lang="ts">
    import "../app.css"
    import Toasts from '$lib/notifications/Toasts.svelte';

    import "nprogress/nprogress.css";
    import NProgress from "nprogress";
    import { navigating } from "$app/stores";
    
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
</style>