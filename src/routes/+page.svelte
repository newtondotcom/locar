<script lang="ts">
    import { Image } from '@svelteuidev/core';
    import { Title } from '@svelteuidev/core';
    import { Button } from '@svelteuidev/core';
    import {DrawingPin} from 'radix-icons-svelte';
    //width={window.innerWidth} height={0.6*window.innerHeight} 
</script>

<div class="title">
    <Title order={1} variant='gradient' gradient={{from: 'blue', to: 'red', deg: 45}}>easyparking</Title>
    <Title order={2}>never forget where you parked your car</Title>
</div>
<Image radius='md' src="https://picsum.photos/200/300" alt="Random image" />
<div class="buttons">
<Button variant='gradient' gradient={{from: 'teal', to: 'blue', deg: 60}}>
    <DrawingPin slot='leftIcon' size={16} /> Mark the location
</Button>
<Button variant='gradient' gradient={{from: 'orange', to: 'red', deg: 45}}>
	Orange red
</Button>
</div>

<Button variant='gradient' gradient={{from: 'grape', to: 'pink', deg: 35}}>
	Grape Pink
</Button>

<style>

    @import '@fortawesome/fontawesome-free/css/all.css';
    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin-top: 1rem;
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