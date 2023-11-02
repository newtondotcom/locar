const translations = {
    "en": {
        "description1": 'is a simple app created to help you remember where you parked your car.It is fully open source and free to use. None of your datas is ever stored or used outside of your device. We respect your privacy and are not using any cookies to track you.',
        "tryit": 'try it',
        "pwainstall": 'Since this is a web site, to use it offline, you must add it to your home screen.',
        "tuto1":"A quick tutorial can be found",
        "tuto2":" here",
        "sub":"never forget where you parked your car",
        "previouslocation":"Your previous location",
        "waypoint":"Waypoint to last location",
        "never":"looks like you have never saved your car last position",
        "change":"Change the previous location",
        "save":"Save your location",
        "picture" : "Picture of your car location",
        "andor": "AND / OR",
        "position": "Position",
        "setpos":"Set Position",
        "saveit":"Save everything",
        "tip":"You can choose to input your car location and a picture of it (to remember your park number for ex), or just one of them",
        "positionsaved":"Your position has been saved ! ",
        "imagesaved":"The image has been saved ! ",
        },
    };

function translate(key: string) {
        let locale = navigator.language.split('-')[0] || 'en';
        return translations[locale][key] || key;
}
    
export default translate;