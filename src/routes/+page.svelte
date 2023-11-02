<script lang="ts">
import { goto } from '$app/navigation';
import constants from '$lib/constants';
</script>

<div class="flex flex-col justify-center items-center h-screen">
<div class="xl:mt-32 xl:w-2/3 sm:mt-10 sm:mb-20 sm:mx-10">
    <h1 class="xl:mb-4 sm:mb-10 mx-10 font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl xl:text-5xl sm:text-6xl ">locapark</h1>
    <div class="text-lg font-medium text-black rounded-lg content-start xl:text-4xl sm:text-5xl sm:mt-10 sm:mx-10 sm:mb-10"> is a simple app created to help you remember where you parked your car.
    It is fully open source and free to use. None of your datas is ever stored or used outside of your device.
     We respect your privacy and are not using any cookies to track you. </div>
</div>

<div>
  <button on:click={()=>goto("/use")}
    class="inline-flex items-center rounded-xl gap-2 border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 xl:text-3xl sm:text-6xl"
  >
    <span class="font-medium"> try it </span>
    <svg
      class="sm:mx-3 sm:h-20 sm:w-20 xl:h-10 xl:w-10 rtl:rotate-180"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </button>
</div> 

<div class="xl:mt-32 sm:mt-20 sm:mx-10">
    <div class="text-lg font-medium text-black rounded-lg content-start sm:text-5xl sm:mt-10 sm:mx-10 sm:mb-10 xl:text-3xl">Since this is a web site, to use it offline, you must add it to your home screen.</div>
    <div class="text-lg font-medium text-black rounded-lg content-start sm:text-5xl sm:mt-10 sm:mx-10 sm:mb-10 xl:text-3xl">A quick tutorial can be found <a href="https://mobilesyrup.com/2020/05/24/how-install-progressive-web-app-pwa-android-ios-pc-mac/">here</a></div>
</div>

<div>
  <h1 class="mb-4 mx-10 sm:text-1xl xl:text-xl font-extrabold leading-none tracking-tight text-blue-900 md:text-5xl lg:text-6xl ">{constants.Version}</h1>
</div>

<!--
<section class="stats shadow mx-8 my-8 row">
    <div class="stat">
      <div class="stat-figure text-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      </div>
      <div class="stat-title">Downloads</div>
      <div class="stat-value">31K</div>
      <div class="stat-desc">Jan 1st - Feb 1st</div>
    </div>
    
    <div class="stat">
      <div class="stat-figure text-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
      </div>
      <div class="stat-title">New Users</div>
      <div class="stat-value">4,200</div>
      <div class="stat-desc">↗︎ 400 (22%)</div>
    </div>
    
    <div class="stat">
      <div class="stat-figure text-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
      </div>
      <div class="stat-title">New Registers</div>
      <div class="stat-value">1,200</div>
      <div class="stat-desc">↘︎ 90 (14%)</div>
    </div>
</div>
-->
<div class="relative bottom-4 mx-auto text-center">
  <ul class="mt-12 flex justify-center gap-6 md:gap-8">
    <li>
      <a
        href="https://github.com/newtondotcom/locapark"
        rel="noreferrer"
        target="_blank"
        class="text-gray-700 transition hover:text-gray-700/75"
      >
        <span class="sr-only">GitHub</span>
        <svg
          class="xl:h-7 xl:w-7 sm:w-20 sm:h-20"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </li>

    <li>
      <a
        href="https://www.instagram.com/newton.creations/"
        rel="noreferrer"
        target="_blank"
        class="text-gray-700 transition hover:text-gray-700/75"
      >
        <span class="sr-only">Instagram</span>
        <svg
          class="xl:h-7 xl:w-7 sm:w-20 sm:h-20"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </li>

    <li>
      <a
        href="https://www.linkedin.com/in/robin-augereau/"
        rel="noreferrer"
        target="_blank"
        class="text-gray-700 transition hover:text-gray-700/75"
      >
        <span class="sr-only">LinkedIn</span>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        class="xl:h-7 xl:w-7 sm:w-20 sm:h-20"
        fill="currentColor"
        viewBox="0 0 24 24">
        <path
          d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
      </a>
    </li>
  </ul>
</div>
</div>

<style lang="postcss">
    a {
        color: grey;
    }
</style>