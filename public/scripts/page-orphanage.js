const options = {
  draggings: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}
const map = L.map('mapid', options).setView([-27.220555, -49.644444], 15)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
});

L.marker([-3.7933145, -38.5196152], { icon }).addTo(map);

function selectImage(event) {
  const button = event.currentTarget

  console.log(button.children)

const buttons = document.querySelectorAll(".images button");
buttons.forEach(removeActiveClass);

function removeActiveClass(button) {
  button.classList.remove('active');
}

const image = button.children[0]
const imageContainer = document.querySelector(".orphanage-details > img")
  imageContainer.src = image.src

  button.classList.add('active')
}



