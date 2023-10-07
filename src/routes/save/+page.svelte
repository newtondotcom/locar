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
                addToast({ message: "Your position has been saved ! ", type: "success", dismissible: true, timeout: constants.delayNotification });
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
                addToast({ message: "The image has been saved ! ", type: "success", dismissible: true, timeout: constants.delayNotification });
            };
            reader.readAsDataURL(file);
            imageloaded = true;
        } else {
            alert('No file selected.');
        }
    }    
</script>

<div class="pre">you can choose to input your car location and a picture of it (to remember your park number for ex), or just one of them</div>
    <div class="flex flex-col w-full border-opacity-50 text-black-800 text-xl font-semibold">
        <div class="grid h-50 card bg-base-300 rounded-box place-items-center m-4">
            <i class="fa-solid fa-camera"></i> Picture of your car 
            <input id="fileInput" class="file-input file-input-bordered w-2/3 max-w-xs m-8" on:change={submitFile} type="file" accept="image/*"/>
        </div>
        <div class="divider">AND / OR</div>
        <div class="grid h-30 card bg-base-300 rounded-box place-items-center m-4">
            <i class="fa-solid fa-location-crosshairs"></i> Position
                <button class="btn btn-active btn-secondary" on:click={submitPosition}>                
                    {#if positionloaded}
                    <i class="fa-solid fa-check"></i>
                    {:else}    
                        Set Position
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
        color : black;
        width: auto;
        height: 60px;
        background-color: white;
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        font-size: 30px;
        width: 95vw;
        height: 50vh;
    }

    .inputs {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        padding-left: 20px;
        padding-right: 20px;
        color: white;
        background-color: blue;
        width: 80%;
    }

    .input {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
        margin-bottom: 3rem;
        border-radius: 20px;
        padding: 20px;
        color: white;
        background-color: blue;
        width: 80%;
        font-size: 20px;
    }

    i{
        transform: translateY(2px);
    }

    input {
        font-size: 1rem;
    }

    #pos {
        margin-top: 20px;
    }

    i {
        margin : 10px;
    }

    .pre {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 0.5rem;
        margin-bottom: 2rem;
        border-radius: 20px;
        padding: 20px;
        color: black;
        width: 80%;
    }
</style>