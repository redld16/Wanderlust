mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9, // starting zoom
});

const el = document.createElement("div");
(el.className = "fa-solid fa-house"),
  (el.style.color = "red"),
  (el.style.fontSize = "1.5rem"),
  el.addEventListener("mouseover", () => {
    (el.className = "fa-regular fa-compass"),
      (el.style.backgroundColor = "white");
  });
el.addEventListener("mouseout", () => {
  (el.className = "fa-solid fa-house"),
    (el.style.backgroundColor = "transparent");
});

const marker = new mapboxgl.Marker(el)
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${listing.title}</h4><p>Exact location will be provided after booking</p>`
    )
  )
  .addTo(map);
