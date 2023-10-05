<script lang="ts">
import { goto } from '$app/navigation';
import constants from '$lib/constants';
</script>

<section>
    <h1>locapark</h1> 
    <div class="hea1"> is a simple app created to help you remember where you parked your car.
    It is fully open source and free to use. None of your datas is ever stored or used outside of your device.
     We respect your privacy and are not using any cookies to track you. </div>
</section>

<section>
<button on:click={()=>goto("/use")}>
	try it
</button>
</section>

<h1 class="text-3xl font-bold underline">
    Hello world!
</h1>
  


<section>
    <div class="hea1">Since this is a web site, to use it offline, you must add it to your home screen.</div>
     A quick tutorial can be found <a href="https://mobilesyrup.com/2020/05/24/how-install-progressive-web-app-pwa-android-ios-pc-mac/">here</a>
</section>

<section>{constants.Version}</section>

<section class="row">
    <button class="svg" on:click={()=>goto("https://github.com/newtondotcom/locapark")}><i class="fa-brands fa-github"></i></button>
    <button class="svg" on:click={()=>goto("https://www.instagram.com/newton.creations/")}><i class="fa-brands fa-instagram"></i></button>
    <button class="svg" on:click={()=>goto("https://www.linkedin.com/in/robin-augereau/")}><i class="fa-brands fa-linkedin"></i></button>
</section>

<style lang="postcss">

    .hea1 {
        margin-top: 0rem;
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-weight: 500;
        color :black;
        border-radius: 20px;
        align-content: left;
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
        margin-bottom: 1rem;
        border-radius: 20px;
        padding: 20px;
        color: black;
    }

    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin-top: 1rem;
    }

    button {
        display: flex;
        font-size: 30px;
        flex-direction: row;
        justify-content: center;
        margin: 10px;
        border: 1px solid black;
        border-radius: 20px;
        padding: 10px;
        color : black;
        width: auto;
        height: 60px;
        background-color: white;
    }

    a {
        color: grey;
    }
</style>