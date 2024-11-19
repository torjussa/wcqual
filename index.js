// using d3 for convenience
var main = d3.select("main");
var scrolly = main.select("#scrolly");
var figure = scrolly.select("figure");
var article = scrolly.select("article");
var step = article.selectAll(".step");

let countries = [1, 2, 3, 4, 5, 6];

const svg = d3.select("svg");

const circleRadius = 50;
const padding = 20;

// initialize the scrollama
var scroller = scrollama();

// generic window resize listener event
function handleResize() {
  // 1. update height of step elements
  var stepH = Math.floor(window.innerHeight * 0.75);
  step.style("height", stepH + "px");

  var figureHeight = window.innerHeight;
  var figureMarginTop = (window.innerHeight - figureHeight) / 2;

  figure
    .style("height", figureHeight + "px")
    .style("top", figureMarginTop + "px");

  // 3. tell scrollama to update new element dimensions
  scroller.resize();
}

// scrollama event handlers
function handleStepEnter(response) {
  console.log(response);
  // response = { element, direction, index }

  countries = countries.map((d) => Math.random()*20 +1);

  // add color to current step only
  step.classed("is-active", function (d, i) {
    return i === response.index;
  });

  // update graphic based on step
  figure
    .select("p")
    .text(response.index + 1)
    .style("opacity", 0.2);
  drawFlags();

  var us = figure.select("image#us")
  console.log(us)
  us.attr("height", 100)
  .attr("width", 100)
}

// Create flags
function drawFlags() {
  svg
    .selectAll("circle")
    .data(countries)
    .join(
      (enter) =>
        enter
          .append("circle")
          .attr("class", (d) => (d > 3 ? "big" : "small"))
          .attr("r", (d) => d)
          .attr("cx", (d, i) => (i + 1) * (circleRadius * 2 + padding))
          .attr("cy", 200)
          .style("fill", "blue"),
      (update) =>
        update
          .attr("r", (d) => d)
          .attr("cx", (d, i) => (i + 1) * (circleRadius * 2 + padding)),
      (exit) => exit.remove()
    );
}

function init() {
  // 1. force a resize on load to ensure proper dimensions are sent to scrollama
  drawFlags();
  handleResize();

  // 2. setup the scroller passing options
  // 		this will also initialize trigger observations
  // 3. bind scrollama event handlers (this can be chained like below)
  scroller
    .setup({
      step: "#scrolly article .step",
      offset: 0.33,
      debug: false,
    })
    .onStepEnter(handleStepEnter);
}

// kick things off
init();
