<script lang="ts">
    import { onMount } from 'svelte';

    let platform = 'IOS';

    function checkOS(n) {
        if (n.userAgentData) {
            const hints = ["architecture", "model", "platform", "platformVersion", "uaFullVersion"];
            n.userAgentData.getHighEntropyValues(hints)
            .then(ua => {
                console.log(ua);
            });
        } else {
            console.log(n.userAgent);
            return "navigator.userAgentData is not supported!";
        }
    }
    
    onMount(() => {
        checkOS(navigator);
    });
</script>

<div class="relative h-screen">
    {#if platform === 'IOS'}
    <div class="absolute inset-0 flex justify-center items-center">
      <div class="flex flex-col justify-center p-4 rounded-md text-5xl">
        <p class="py-6 px-12">1. Launch Safari on your iPhone or iPad.</p>
        <p class="py-6 px-12">2. Navigate to the site that you want to create a Home screen shortcut to.</p>
        <p class="py-6 px-12">3. Tap the Share icon (the square with an arrow pointing out of it) at the bottom of the screen.</p>
        <p class="py-6 px-12">4. Scroll down to the list of actions and tap Add to Home Screen. 
          <span class="font-light text-3xl">(If you don't see the action, scroll to the bottom and tap Edit Actions, then tap Add next to the Add to Home Screen action.
          After that, you'll be able to select it from the Share Sheet.)</span></p>
      </div>
    </div>
    {:else if platform === 'Android'}
    <div class="absolute inset-0 flex justify-center items-center">
      <div class="flex flex-col justify-center p-4 rounded-md text-5xl">
        <p class="py-6 px-12">1. Open a URL address of a PWA you want to install in your browser.</p>
        <p class="py-6 px-12">2. Open your browser’s settings.</p>
        <p class="py-6 px-12">3. Scroll down and tap Add to Home screen.</p>
        <p class="py-6 px-12">4. Confirm by tapping Add.</p>
      </div>
    </div>
    {/if}
  </div>
  
  
