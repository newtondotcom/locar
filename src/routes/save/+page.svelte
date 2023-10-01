<script lang="ts">
let alreadySaved:boolean = false;

    function showPosition() {
        if (navigator.geolocation) {
            alert(navigator.geolocation.getCurrentPosition(showPosition));
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    function submitFile(event){
        event.preventDefault();
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = function() {
            const base64String = reader.result;                
            localStorage.setItem('image', base64String.toString());
        }
        reader.readAsDataURL(file);
        alert('Image saved!');
    }
    
</script>

<input on:submit={submitFile} type="file" accept="image/*" />

<div id="result">
    <!--Position information will be inserted here-->
</div>
<button type="button" on:click={showPosition}>Show Position</button>