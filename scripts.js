
let mapOptions = {
    center:[51.5073219, -0.1276474],
    zoom:15
}

let map = new L.map('map' , mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);



let apiKey = "9098219d18994560be55415be86df062",
    marker = null;

const addressSearchControl = L.control.addressSearch(apiKey,{
    position: "topleft",
    placeholder: "Enter the address here",
    resultCallback : (address) => {
        if(!address){
            return;
        }
        if(marker !== null){
            map.removeLayer(marker);
        }

        marker = L.marker([address.lat,address.lon]).addTo(map);
        map.setView([address.lat,address.lon],17);
    }
});

map.addControl(addressSearchControl);

