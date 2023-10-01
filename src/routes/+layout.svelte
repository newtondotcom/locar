<script lang="ts">
import { Title } from '@svelteuidev/core';
</script>

<div class="title">
    <Title order={1} variant='gradient' gradient={{from: 'blue', to: 'red', deg: 45}}>locar</Title>
    <Title order={2}>never forget where you parked your car</Title>
</div>

<slot/>


<style>

@import '@fortawesome/fontawesome-free/css/all.css';

.title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
        margin-bottom: 2rem;
    }
</style>