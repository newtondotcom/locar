<script lang="ts">
  import About from '$lib/routing/About.svelte';
  import Save from '$lib/routing/Save.svelte';
  import Use from '$lib/routing/Use.svelte';

  let collection = [
    { name: 'About', component: About },
    { name: 'Save', component: Save },
    { name: 'Use', component: Use }
  ];

  let selectedComponent: any;

  function selectComponent(component: any) {
    selectedComponent = component;
  }
</script>

<main>
  <nav class="flex flex-row">
    {#each collection as { name, component }}
      <button class="flex" on:click={() => selectComponent(component)}>{name}</button>
    {/each}
  </nav>

  <section>
    {#if selectedComponent}
      <svelte:component this={selectedComponent} />
    {/if}
  </section>
</main>
