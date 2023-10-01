<script lang="ts">
let imageloaded= false;
let positionloaded= false;

import { Checkbox } from '@svelteuidev/core';
import Success from '$lib/Success.svelte';

function showPosition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position.coords.latitude+ ";" + position.coords.longitude);
            localStorage.setItem('position', position.coords.latitude+ ";" + position.coords.longitude);
            alert('Position saved!');
            positionloaded = true;
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
                alert('Image saved!');

            };
            reader.readAsDataURL(file);
            imageloaded = true;
        } else {
            alert('No file selected.');
        }
    }    
</script>

<div class="container">
    <div class="needed">
        hint : we need two things to remember where you parked your car, just fill above to check them
        <li>
            <Checkbox checked={imageloaded}/>
            <div class="txt">your current location</div>
        </li>
        <li>
            <Checkbox checked={positionloaded}/>
            <div class="txt">a picture of your car parked</div>
        </li>
    </div>

    <div class="inputs">
        <input id="fileInput" on:change={submitFile} type="file" accept="image/*" />
        <button id="pos" type="button" on:click={showPosition}>Set Position</button>
    </div>
</div>

{#if imageloaded && positionloaded}
<Success />
{/if}


<style>
    .needed {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
        background-color: rgb(106, 207, 143);
        border-radius: 20px;
        padding: 20px;
        color: white;
        position: absolute;
        bottom: 5px;
        width: 80%;
    }

    li{
        list-style-type: none;
        display: flex;  
        flex-direction: row;
        justify-content: center;
        margin: 10px;
    }

    .txt {
        margin-left: 10px;
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
        margin-bottom: 2rem;
        border-radius: 30px;
        color: white;
        background-color: blue;
    }

    .inputs {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
        margin-bottom: 2rem;
        border-radius: 20px;
        padding: 20px;
        color: white;
        background-color: blue;
        width: 80%;
    }

    input {
        margin-left: 20px;
        font-size: 1rem;
    }

    #pos {
        margin-top: 20px;
    }
</style>