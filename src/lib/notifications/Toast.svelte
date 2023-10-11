<script>
    import { createEventDispatcher } from "svelte";
    import CloseIcon from "./CloseIcon.svelte";
  
    const dispatch = createEventDispatcher();
    export let dismissible = true;
  </script>

  <div role="alert" class="rounded-xl border border-gray-100 bg-white p-4">
    <div class="flex items-start gap-4">
      {#if dismissible}
      <button class="close" on:click={() => dispatch("dismiss")}>
        <CloseIcon width="0.8em" />
      </button>
      {/if}
  
      <div class="flex-1">
        <strong class="block text-gray-900 sm:text-5xl"> Success </strong>
  
        <p class="mt-1 text-gray-700 sm:text-4xl">
          <slot />
        </p>
      </div>
  
      <button class="text-gray-500 transition hover:text-gray-600">
        <span class="sr-only">Dismiss popup</span>
  
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
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
  