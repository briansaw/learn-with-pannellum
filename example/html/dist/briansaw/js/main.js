pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "http://localhost:8080/images/in.jpg",
    "preview": "/images/preview.jpg", // Preview
    "autoLoad": true,  //Auto load
    "autoRotate": -2, //Auto rotate
    "title": "Test Pannellum", //Title and author
    "author": "Briansaw", //Title and author
    "compass": true, //Compass
    "northOffset": 247.5, //Compass
    "pitch": 2.3, //Initial view
    "yaw": -135.4, //Initial view
    "hfov": 120 //Initial view
});