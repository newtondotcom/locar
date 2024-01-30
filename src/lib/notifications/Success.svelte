<script lang="ts">
    import translate from "../locales/translations";
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

<div class="flex flex-col justify-center align-middle">
    {#if imageloaded || positionloaded}
        <div class="absolute top-3/4 left-0 flex-row justify-center items-center w-full flex align-middle text-center">
            <div class="flex justify-center align-middle text-center items-center w-4/5">
                <button
                class="inline-block text-5xl font-medium focus:outline-none focus:ring active:text-blue-500 border border-current bg-blue-600 text-white rounded-full px-12 py-9"
                on:click={handle} >
                    {translate("saveit")}
                </button>
            </div>
        </div>
    {:else}
    <div class="absolute top-1/4 left-0 flex-row justify-center items-center w-full flex align-middle text-center">
        <div class="flex justify-center align-middle text-center items-center w-4/5 bg-gray-100">
            <div role="alert" class="flex self-center rounded-xl border-2 border-black-100 p-4 w-90">
                <div class="flex items-start gap-4">
                    <span class="text-blue-600" >
                        <svg class="translate-y-1/2" height="30px" width="30px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:currentColor;} </style> <g> <path class="st0" d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M256,86.069 c28.463,0,51.538,23.074,51.538,51.538c0,28.464-23.074,51.538-51.538,51.538c-28.463,0-51.538-23.074-51.538-51.538 C204.462,109.143,227.537,86.069,256,86.069z M310.491,425.931H201.51v-43.593h35.667V276.329H215.38v-43.593h65.389v3.963v39.63 v106.009h29.722V425.931z"></path> </g> </g></svg>
                    </span>
                
                    <div class="flex-1">
                        <p class="mt-1 text-gray-700 text-4xl">
                            {translate("tip")}
                        </p>
                    </div>
                </div>
            </div>   
        </div> 
    </div> 
    {/if}
</div>