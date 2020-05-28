pannellum.viewer('panorama_hotspots', {
    "type": "equirectangular",
    "panorama": "/images/in.jpg",
    "autoLoad": true,
    /*
     * Uncomment the next line to print the coordinates of mouse clicks
     * to the browser's developer console, which makes it much easier
     * to figure out where to place hot spots. Always remove it when
     * finished, though.
     */
    //"hotSpotDebug": true,
    "hotSpots": [
        {
            "pitch": 6.1,
            "yaw": 30.5,
            "type": "info",
            "text": "Refrigerator (ตู้เย็น)",
            "URL": "https://github.com/briansaw"
        },
        {
            "pitch": -11.4,
            "yaw": 240.6,
            "type": "info",
            "text": "Doll (ตุ๊กตา)",
        },
        {
            "pitch": -4.9,
            "yaw": 275.4,
            "type": "info",
            "text": "Monitor (จอภาพ)",
        }
    ]
});