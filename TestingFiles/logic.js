// Connect to the jsons (set variables)
const json = "Fires_complete.json"

// Create a map object.
let myMap = L.map("map", {
    center: [45, -93.3],
    zoom: 12
  });

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

d3.json(json).then(function(data) {
// Loop through the cities array, and create one marker for each city object.
for (let i = 0; i < data.length; i++) {

  // Conditionals for country gdp_pc
  let color = "";
  let radius = "";
  if (data[i].Date == "2013") {
    color = "black";
    radius = 10;
  }
  else if (data[i].Date == "2014") {
    color = "red";
    radius = 15;
  }
  else if (data[i].Date == "2015") {
    color = "yellow";
    radius = 20;
  }
  else {
    color = "violet";
  }

  // Add circles to the map.
  L.circle([data[i].Latitude, data[i].Longitude], {
    fillOpacity: 0.75,
    color: "red",
    fillColor: color,
    radius: radius
  }).bindPopup(`<h1>${data[i].Description}</h1> <hr> <h3>Station Number: ${data[i].Station}  |  Year: ${data[i].Date}</h3>`).addTo(myMap);
}

});

// Create a custom legend control
const legend = L.control({ position: 'bottomright' });

// Function to generate the HTML content for the legend based on colors and labels
legend.onAdd = function () {
  const div = L.DomUtil.create('div', 'legend');
  const colors = ['black', 'red', 'yellow', 'violet'];
  const labels = ['2013', '2014', '2015', 'Other'];

  for (let i = 0; i < colors.length; i++) {
    div.innerHTML +=
      '<i style="background:' + colors[i] + '"></i> ' +
      labels[i] + '<br>';
  }
  return div;
};

// Add the legend to the map
legend.addTo(myMap);

// TO DO:
// CREATE OTHER LAYERS BY YEAR? switch between years
// Markers color by event type? (need to do a groupby)
// CREATE RAIN HEAT MAP & FIRE HEAT MAP
// need to create a postgres database to fufill requirements