<script>
    import { createEventDispatcher } from "svelte";
    import { fade } from "svelte/transition";
    import CloseIcon from "./CloseIcon.svelte";
  
    const dispatch = createEventDispatcher();
  
    export let type = "error";
    export let dismissible = true;
  </script>
  
  <div class="toast toast-center">
    <div class="alert alert-info">
      <span><slot /></span>
      {#if dismissible}
      <button class="close" on:click={() => dispatch("dismiss")}>
        <CloseIcon width="0.8em" />
      </button>
      {/if}
    </div>
  </div>
  
  <style lang="postcss">
    button {
      color: white;
      background: transparent;
      border: 0 none;
      padding: 0;
      margin: 0 0 0 auto;
      line-height: 1;
      font-size: 1rem;
    }
  </style>
  