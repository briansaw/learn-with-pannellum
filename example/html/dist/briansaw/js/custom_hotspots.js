viewer = pannellum.viewer('panorama_custom_hotspots', {
    "type": "equirectangular",
    "panorama": "/images/in.jpg",
    "autoLoad": true,
    "hotSpots": [
        {
            "pitch": 6.1,
            "yaw": 30.5,
            "cssClass": "custom-hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "Refrigerator (ตู้เย็น)"
        },
        {
            "pitch": -11.4,
            "yaw": 240.6,
            "cssClass": "custom-hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "Doll (ตุ๊กตา)"
        },
        {
            "pitch": -4.9,
            "yaw": 275.4,
            "cssClass": "custom-hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "Monitor (จอภาพ)"
        }
    ]
});

// Hot spot creation function
function hotspot(hotSpotDiv, args) {
hotSpotDiv.classList.add('custom-tooltip');
var span = document.createElement('span');
span.innerHTML = args;
hotSpotDiv.appendChild(span);
span.style.width = span.scrollWidth - 20 + 'px';
span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
span.style.marginTop = -span.scrollHeight - 12 + 'px';
}