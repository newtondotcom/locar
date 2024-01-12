<script lang="ts">
    let imageloaded= false;
    let positionloaded= false
    import Success from '$lib/Success.svelte';
    import { addToast } from "$lib/stores/notif";
    import constants from "$lib/constants";
    import translate from '$lib/locales/translations';
    export let goToHome : any;
    
        function submitPosition() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    console.log(position.coords.latitude+ ";" + position.coords.longitude);
                    localStorage.setItem('position', position.coords.latitude+ ";" + position.coords.longitude);
                    addToast({ message: translate("positionsaved"), dismissible: true, timeout: constants.delayNotification });
                    positionloaded = true;
                    console.log(positionloaded);
                });
            } else {
                alert("Geolocation is not supported by this browser.");
            }
        }
    
        function submitFile(event: { preventDefault: () => void; }) {
            event.preventDefault();
            const fileInput = document.getElementById('fileInput');
            const file = fileInput.files[0];
    
            if (file) {
                const reader = new FileReader();
                reader.onloadend = function () {
                    const base64String = reader.result;
                    localStorage.setItem('image', base64String.toString()); 
                    addToast({ message: translate("imagesaved"), dismissible: true, timeout: constants.delayNotification });
                };
                reader.readAsDataURL(file);
                imageloaded = true;
            } else {
                alert('No file selected.');
            }
        }    
    </script>
    
        <div class="flex flex-col justify-center items-center h-screen w-full border-opacity-50 text-black text-xl font-semibold">
            <div class="grid bg-slate-400 xl:h-50 sm:h-200 sm:text-4xl card rounded-box place-items-center m-4 xl:w-2/3 sm:w-4/5">
                <i class="fa-solid fa-camera"></i> {translate("picture")}
                <input id="fileInput" class="file-input file-input-bordered w-2/3 max-w-xs m-8 sm:text-5xl sm:w-full" on:change={submitFile} type="file" accept="image/*"/>
            </div>
            <div class="divider sm:text-4xl">{translate("andor")}</div>
            <div class="grid bg-slate-400 xl:h-50 sm:h-200 sm:text-4xl card rounded-box place-items-center m-4 xl:w-2/3 sm:w-4/5">
                <i class="fa-solid fa-location-crosshairs"></i> {translate("position")}
                    <button class="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:text-4xl sm:h-20 items-center justify-center h-screen" on:click={submitPosition}>                
                        {#if positionloaded}
                            <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        {:else}    
                            <div class="sm:text-4xl">{translate("setpos")}</div>
                        {/if}
                    </button>
            </div>
    </div>
    
    <Success bind:imageloaded bind:positionloaded goToRecent={goToHome} />
    
    
    <style lang="postcss">
        button {
            display: flex;  
            flex-direction: row;
            justify-content: center;
            margin: 10px;
            border: 1px solid white;
            border-radius: 20px;
            padding: 20px;
            width: auto;
            height: 60px;
            background-color: white;
            color:black;
        }
    
        i{
            transform: translateY(2px);
        }
    
        input {
            font-size: 1rem;
        }
    
        i {
            margin : 10px;
        }
    </style>