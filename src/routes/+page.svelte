<script lang="ts">
  import About from '$lib/routing/About.svelte';
  import Save from '$lib/routing/Save.svelte';
  import Use from '$lib/routing/Use.svelte';
  import Download from '$lib/routing/Download.svelte';
  import { onMount } from 'svelte';

  let collection = [
    { name: 'Recent', component: Use },
    { name: 'Save', component: Save },
    { name: 'Download', component: Download },
    { name: 'About', component: About}
  ];

  let selectedComponent: any;

  function selectComponent(component: any) {
    selectedComponent = component;
  }

  function openRecent() {
    selectedComponent = Use;
  }

  function openSave() {
    selectedComponent = Save;
  }

  function openAbout() {
    selectedComponent = About;
  }

  onMount (() => {
    selectComponent(collection[0].component);
  });

</script>

<main>
  <nav class="flex flex-row absolute bottom-0 left-0 w-full justify-center h-[150px] bg-red-400">
    {#each collection as { name, component }}
      {#if name != "About"}
        <button class="flex w-1/3 text-center self-center justify-center border-x" on:click={() => selectComponent(component)}>
          {#if name === "Recent"}
          <svg class="h-14 w-14" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>time-history</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> </g> <g id="icons_Q2" data-name="icons Q2"> <path d="M46,24A22,22,0,0,1,4.3,33.7a2,2,0,0,1,.5-2.6,2,2,0,0,1,3,.7A18,18,0,1,0,10.6,12h5.3A2.1,2.1,0,0,1,18,13.7,2,2,0,0,1,16,16H6a2,2,0,0,1-2-2V4.1A2.1,2.1,0,0,1,5.7,2,2,2,0,0,1,8,4V8.9A22,22,0,0,1,46,24Z"></path> <path d="M34,32a1.7,1.7,0,0,1-1-.3L22,25.1V14a2,2,0,0,1,4,0v8.9l9,5.4a1.9,1.9,0,0,1,.7,2.7A1.9,1.9,0,0,1,34,32Z"></path> </g> </g> </g></svg>
          {:else if name === "Save"}
          <svg class="h-14 w-14" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>plus</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Icon-Set" transform="translate(-360.000000, -1035.000000)" fill="#000000"> <path d="M388,1053 L378,1053 L378,1063 C378,1064.1 377.104,1065 376,1065 C374.896,1065 374,1064.1 374,1063 L374,1053 L364,1053 C362.896,1053 362,1052.1 362,1051 C362,1049.9 362.896,1049 364,1049 L374,1049 L374,1039 C374,1037.9 374.896,1037 376,1037 C377.104,1037 378,1037.9 378,1039 L378,1049 L388,1049 C389.104,1049 390,1049.9 390,1051 C390,1052.1 389.104,1053 388,1053 L388,1053 Z M388,1047 L380,1047 L380,1039 C380,1036.79 378.209,1035 376,1035 C373.791,1035 372,1036.79 372,1039 L372,1047 L364,1047 C361.791,1047 360,1048.79 360,1051 C360,1053.21 361.791,1055 364,1055 L372,1055 L372,1063 C372,1065.21 373.791,1067 376,1067 C378.209,1067 380,1065.21 380,1063 L380,1055 L388,1055 C390.209,1055 392,1053.21 392,1051 C392,1048.79 390.209,1047 388,1047 L388,1047 Z" id="plus"> </path> </g> </g> </g></svg>
          {:else}
          <svg class="h-14 w-14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 17H17.01M17.4 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H6.6M12 15V4M12 15L9 12M12 15L15 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          {/if}
        </button>
      {/if}
    {/each}
  </nav>

  <button 
  class = "absolute top-6 left-6 text-blue-600"
  on:click={() => selectComponent(About)}
  >
  <svg class="h-14 w-14" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>about</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="about-white" fill="currentColor" transform="translate(42.666667, 42.666667)"> <path d="M213.333333,3.55271368e-14 C95.51296,3.55271368e-14 3.55271368e-14,95.51168 3.55271368e-14,213.333333 C3.55271368e-14,331.153707 95.51296,426.666667 213.333333,426.666667 C331.154987,426.666667 426.666667,331.153707 426.666667,213.333333 C426.666667,95.51168 331.154987,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,384 C119.227947,384 42.6666667,307.43872 42.6666667,213.333333 C42.6666667,119.227947 119.227947,42.6666667 213.333333,42.6666667 C307.44,42.6666667 384,119.227947 384,213.333333 C384,307.43872 307.44,384 213.333333,384 Z M240.04672,128 C240.04672,143.46752 228.785067,154.666667 213.55008,154.666667 C197.698773,154.666667 186.713387,143.46752 186.713387,127.704107 C186.713387,112.5536 197.99616,101.333333 213.55008,101.333333 C228.785067,101.333333 240.04672,112.5536 240.04672,128 Z M192.04672,192 L234.713387,192 L234.713387,320 L192.04672,320 L192.04672,192 Z" id="Shape"> </path> </g> </g> </g></svg>
  </button>

  <section>
    {#if selectedComponent === About}
      <About goToHome={openRecent} />
    {:else if selectedComponent === Save}
      <Save goToHome={openRecent}/>
    {:else if selectedComponent === Use}
      <Use goToSave={openSave}/>
    {/if}
  </section>
</main>
