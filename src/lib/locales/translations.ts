const translations = {
    "en": {
        "description1": 'is a simple app created to help you remember where you parked your car.It is fully open source and free to use. None of your datas is ever stored or used outside of your device. We respect your privacy and are not using any cookies to track you.',
        "tryit": 'try it',
        "pwainstall": 'Since this is a web site, to use it offline, you must add it to your home screen.',
        "tuto1":"A quick tutorial can be found",
        "tuto2":" here",
        "sub":"never forget where you parked your car",
        "previouslocation":"Your previous location",
        "waypoint":"GPS Waypoint",
        "never":"looks like you have never saved your car last position",
        "change":"Change the previous location",
        "save":"Save your location",
        "picture" : "Picture of your car location",
        "andor": "AND / OR",
        "position": "Position",
        "setpos":"Set Position",
        "saveit":"Save and go",
        "tip":"You can choose to input your car location and a picture of it (to remember your park number for ex), or just one of them",
        "positionsaved":"Your position has been saved ! ",
        "imagesaved":"The image has been saved ! ",
        "success":"Success !",
        "seefullscreen":"See it in full screen",
        "mobile": "This app is not optimized for desktop use, please use it on a mobile device. In fact, desktop devices truly dont have any use of this app, as it is meant to be used to remember where you parked your car, and you don't park your car with a desktop device, do you ?",
        },

    "fr": {
        "description1": 'est une application simple créée pour vous aider à vous rappeler où vous avez garé votre voiture. Elle est entièrement open source et gratuite à utiliser. Aucune de vos données n\'est jamais stockée ou utilisée en dehors de votre appareil. Nous respectons votre vie privée et n\'utilisons aucun cookie pour vous suivre.',
        "tryit": 'essayer',
        "pwainstall": 'Puisqu\'il s\'agit d\'un site web, pour l\'utiliser hors ligne, vous devez l\'ajouter à votre écran d\'accueil.',
        "tuto1": "Un tutoriel rapide peut être trouvé",
        "tuto2": " ici",
        "sub": "pour ne jamais oublier où vous avez garé votre voiture",
        "previouslocation": "Votre emplacement précédent",
        "waypoint": "Point GPS",
        "never": "Il semble que vous n'ayez jamais enregistré l'emplacement précédent de votre voiture",
        "change": "Changer l'emplacement précédent",
        "save": "Enregistrer votre emplacement",
        "picture": "Image de l'emplacement de votre voiture",
        "andor": "ET / OU",
        "position": "Position",
        "setpos": "Définir la position",
        "saveit": "Enregistrer et quitter",
        "tip": "Vous pouvez choisir d'entrer l'emplacement de votre voiture et une image de celle-ci (pour vous souvenir de votre numéro de stationnement, par exemple), ou simplement l'un d'entre eux",
        "positionsaved": "Votre position a été enregistrée !",
        "imagesaved": "L'image a été enregistrée !",
        "success": "Succès !",
        "seefullscreen": "Voir en plein écran",
    },
    };

function translate(key: string) {
        let locale = navigator.language.split('-')[0] || 'en';
        return translations[locale][key] || key;
}
    
export default translate;