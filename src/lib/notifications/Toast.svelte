<script>
    import translate from "$lib/locales/translations";
    import { createEventDispatcher } from "svelte";
  
    const dispatch = createEventDispatcher();
  </script>


  <div role="alert" class="rounded-xl border border-greys-800 bg-white p-4 xl:text-4xl sm:text-7xl sm:mt-60">
    <div class="flex items-start gap-4">
      <span class="text-green-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="sm:w-16 sm:h-16 xl:h-6 xl:w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
  
      <div class="flex-1">
        <strong class="block font-medium text-gray-900 sm:text-4xl"> {translate("success")} </strong>
  
        <p class="mt-1 text-sm sm:text-5xl text-gray-700">
          <slot />
        </p>
      </div>
  
      <button class="text-blue-950" on:click={() => dispatch("dismiss")}>
        <span class="sr-only">Dismiss popup</span>
  
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="black"
          class="sm:w-14 sm:h-14 xl:h-6 xl:w-6"
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
  