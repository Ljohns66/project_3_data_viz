// container references for buttons 
const buttonContainerOne = d3.select("#buttonContainerOne");
const buttonContainerTwo = d3.select("#buttonContainerTwo");

// button one
const buttonOne = buttonContainerOne
  .append("button")
  .attr("id", "buttonOne")
  .text("Maps & Data");

// event listener for button one
buttonOne.on("click", function() {
  window.location.href = "page-two.html";
});

// button two
const buttonTwo = buttonContainerTwo
  .append("button")
  .attr("id", "buttonTwo")
  .text("Home");

// event listener for button two
buttonTwo.on("click", function() {
  window.location.href = "page-one.html";
});
