<script>
    import translate from "$lib/locales/translations";
    import { createEventDispatcher } from "svelte";
  
    const dispatch = createEventDispatcher();
  </script>


  <div role="alert" class="absolute top-60 left-0 w-full rounded-xl px-4 py-7 bg-gray-500 p-4">
    <div class="flex items-start gap-4">
      <span class="text-green-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-16 h-16"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
  
      <div class="flex-1">
        <strong class="block font-medium text-white text-6xl pb-4"> {translate("success")} </strong>
  
        <p class="mt-1 text-5xl text-white">
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
          stroke="white"
          class="w-14 h-14"
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
  