pannellum.viewer('panorama_tour', {   
    "autoLoad": true,
    "default": {
        "firstScene": "in",
        "author": "Briansaw",
        "sceneFadeDuration": 1000
        
    },
    "scenes": {
        "in": {
            "title": "Indoor",
            "hfov": 110,
            "pitch": -3,
            "yaw": 127,
            "type": "equirectangular",
            "panorama": "/images/in.jpg",
            "hotSpots": [
                {
                    "pitch": -2.1,
                    "yaw": 168.9,
                    "type": "scene",
                    "text": "Outdoor",
                    "sceneId": "out"
                }
            ]
        },

        "out": {
            "title": "Outdoor",
            "hfov": 110,
            "yaw": 180,
            "type": "equirectangular",
            "panorama": "/images/out.jpg",
            "hotSpots": [
                {
                    "pitch": 5.6,
                    "yaw": -5.1,
                    "type": "scene",
                    "text": "Indoor",
                    "sceneId": "in",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        }
    }
});