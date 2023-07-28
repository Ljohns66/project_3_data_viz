// Connect to the jsons (set variables)
const json = "Fires_complete.json"

// Create a map object.
let myMap = L.map("map", {
    center: [45.02724, -93.28623],
    zoom: 11
  });

// Adding a tile layer (the background map image) to our map:
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);



  d3.json(json).then(function(data) {
    console.log(data);

    for (let i = 0; i < data.length; i++) {
        const fire = data[i];
  
        //used to test 
        // console.log(fire.Latitude, fire.Longitude)
        if (fire.date )
    
        L.marker([fire.Latitude, fire.Longitude])
          .bindPopup(`<h1>${fire.Description}</h1> <hr> <h3>Station Number ${fire.Station}</h3>`)
          .addTo(myMap);
      };
  });

// TO DO:
// CREATE OTHER LAYERS BY YEAR? switch between years
// Markers color by event type? (need to do a groupby)
// CREATE RAIN HEAT MAP & FIRE HEAT MAP
// need to create a postgres database to fufill requirements