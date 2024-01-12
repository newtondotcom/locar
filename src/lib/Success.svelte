<script lang="ts">
    import { goto } from "$app/navigation";
    import translate from "./locales/translations";
    export let imageloaded:boolean;
    export let positionloaded:boolean;
    export let goToRecent : any;

    function handle(){
        if (!imageloaded){
            localStorage.removeItem('image');
        }
        if (!positionloaded){
            localStorage.removeItem('position');
        }
        goToRecent();
    }

</script>

<div class="container">
    {#if imageloaded || positionloaded}
    <button
  class="group sm:absolute sm:top-3/4 sm:ml-40 inline-block text-5xl font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
  on:click={handle} 
    >
  <span
    class="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
  ></span>

  <span class="relative block border border-current bg-white px-8 py-3">
    {translate("saveit")}
  </span>
    </button>
    {:else}
    <div class="flex flex-col justify-center items-center sm:absolute sm:top-1/4 sm:ml-40 sm:w-4/5">
        <div role="alert" class="rounded-xl border border-black-100 bg-white p-4 sm:w-90">
            <div class="flex items-start gap-4">
                <span class="text-green-600" >
                    <svg height="40px" width="40px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#000000;} </style> <g> <path class="st0" d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M256,86.069 c28.463,0,51.538,23.074,51.538,51.538c0,28.464-23.074,51.538-51.538,51.538c-28.463,0-51.538-23.074-51.538-51.538 C204.462,109.143,227.537,86.069,256,86.069z M310.491,425.931H201.51v-43.593h35.667V276.329H215.38v-43.593h65.389v3.963v39.63 v106.009h29.722V425.931z"></path> </g> </g></svg>
                </span>
            
                <div class="flex-1">
                    <p class="mt-1 text-gray-700 sm:text-4xl">
                        {translate("tip")}
                    </p>
                </div>
            </div>
        </div>   
    </div>   
    {/if}
</div>

<style lang="postcss">
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
        margin-bottom: 2rem;
        border-radius: 20px;
        padding: 20px;
        color: white;
    }
</style>