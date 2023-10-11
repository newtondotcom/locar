<script lang="ts">
let imageloaded= false;
let positionloaded= false
import Success from '$lib/Success.svelte';
import { addToast } from "$lib/stores/notif";
import constants from "$lib/constants";

    function submitPosition() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                console.log(position.coords.latitude+ ";" + position.coords.longitude);
                localStorage.setItem('position', position.coords.latitude+ ";" + position.coords.longitude);
                addToast({ message: "Your position has been saved ! ", dismissible: true, timeout: constants.delayNotification });
                positionloaded = true;
                console.log(positionloaded);
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    function submitFile(event) {
        event.preventDefault();
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = function () {
                const base64String = reader.result;
                localStorage.setItem('image', base64String.toString()); 
                addToast({ message: "The image has been saved ! ", dismissible: true, timeout: constants.delayNotification });
            };
            reader.readAsDataURL(file);
            imageloaded = true;
        } else {
            alert('No file selected.');
        }
    }    
</script>

<div class="flex flex-col justify-center mt-2 mb-8 rounded-lg p-5 text-black sm:text-5xl">
    you can choose to input your car location and a picture of it (to remember your park number for ex), or just one of them
</div>
    <div class="flex flex-col justify-center items-center h-screen w-full border-opacity-50 text-black-800 text-xl font-semibold">
        <div class="grid bg-slate-400 xl:h-50 sm:h-200 sm:text-5xl card bg-base-300 rounded-box place-items-center m-4 xl:w-2/3 sm:w-4/5">
            <i class="fa-solid fa-camera"></i> Picture of your car 
            <input id="fileInput" class="file-input file-input-bordered w-2/3 max-w-xs m-8 sm:text-5xl sm:w-full" on:change={submitFile} type="file" accept="image/*"/>
        </div>
        <div class="divider sm:text-4xl">AND / OR</div>
        <div class="grid bg-slate-400 xl:h-50 sm:h-200 sm:text-5xl card bg-base-300 rounded-box place-items-center m-4 xl:w-2/3 sm:w-4/5">
            <i class="fa-solid fa-location-crosshairs"></i> Location
                <button class="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:text-4xl sm:h-20 items-center justify-center h-screen" on:click={submitPosition}>                
                    {#if positionloaded}
                        <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 14L9 19L20 8M6 8.88889L9.07692 12L16 5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    {:else}    
                        <div class="sm:text-4xl">Set Position</div>
                    {/if}
                </button>
        </div>
</div>

<Success bind:imageloaded bind:positionloaded />


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