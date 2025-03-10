// Initialize and add the map
let map;
let marker;

async function initMap() {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });

  //Obtener la geolocalización
  //marker.setPosition({lat, lng})
  geoPosiciona();
}

initMap();

function geoPosiciona(){
    if(navigator.geolocation){
        const geoLoc = navigator.geolocation;
        const watchPos = geoLoc.watchPosition(centraMapa, onError, {timeout: 60000})
    } else {
        alert("Tu navegador no permite geolocalización");
    }
}

function centraMapa(position){
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }

    // Actualizar la posición del marcador
    marker.position = nuevaPos;

    // Centrar el mapa en la nueva posición
    map.setCenter(nuevaPos);
}

function onError(error) {
    console.log("Se produjo un error");
    console.error(error);
}