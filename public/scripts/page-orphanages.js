const mymap = L.map('map').setView([-3.7933145,-38.5196152], 16)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon ({
    iconUrl: "images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

function addMarker ({id, name, lat,lng})
const popup = L.popup ({
    closeButton: false,
    classname: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent ('Lar das meninas <a href="orphanege?id=1" class="choose-orphanege"> <img src="/images/arrow-white.svg"> </a>')

L
    .marker([-3.7933145,-38.5196152], {icon})
    .addTo(map)
    .bindPopup(popup)

const orphanagesSpan = document.querySelectorAll('.orphanages span')

orphanagesSpan.forEach(span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker (orphanage)
})
    