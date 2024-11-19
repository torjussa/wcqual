// using d3 for convenience
var main = d3.select("main");
var scrolly = main.select("#scrolly");
var figure = scrolly.select("figure");
var article = scrolly.select("article");
var step = article.selectAll(".step");

var hosts = [
  {
    name: "USA",
    isoCode: "us",
    x: 100,
    y: 300,
  },
  {
    name: "Canada",
    isoCode: "ca",
    x: 10,
    y: 10,
  },
  {
    name: "Mexico",
    isoCode: "mx",
    x: 10,
    y: 50,
  },
];
var countries = [
  {
    name: "Albania",
    isoCode: "al",
    fifaRank: "82",
    nationsLeagueGroup: "C3",
    latitude: "41.153332",
    longitude: "20.168169",
  },
  {
    name: "Andorra",
    isoCode: "ad",
    fifaRank: "157",
    nationsLeagueGroup: "D1",
    latitude: "42.506305",
    longitude: "1.521801",
  },
  {
    name: "Armenia",
    isoCode: "am",
    fifaRank: "92",
    nationsLeagueGroup: "C3",
    latitude: "40.069099",
    longitude: "45.039188",
  },
  {
    name: "Austria",
    isoCode: "at",
    fifaRank: "24",
    nationsLeagueGroup: "A3",
    latitude: "47.809402",
    longitude: "13.055000",
  },
  {
    name: "Azerbaijan",
    isoCode: "az",
    fifaRank: "110",
    nationsLeagueGroup: "C2",
    latitude: "40.399133",
    longitude: "47.576927",
  },
  {
    name: "Belarus",
    isoCode: "by",
    fifaRank: "75",
    nationsLeagueGroup: "C3",
    latitude: "53.709807",
    longitude: "27.953389",
  },
  {
    name: "Belgium",
    isoCode: "be",
    fifaRank: "21",
    nationsLeagueGroup: "A1",
    latitude: "50.503887",
    longitude: "4.469936",
  },
  {
    name: "Bosnia and Herzegovina",
    isoCode: "ba",
    fifaRank: "62",
    nationsLeagueGroup: "B3",
    latitude: "44.204791",
    longitude: "17.795321",
  },
  {
    name: "Bulgaria",
    isoCode: "bg",
    fifaRank: "78",
    nationsLeagueGroup: "C4",
    latitude: "42.733882",
    longitude: "25.485830",
  },
  {
    name: "Croatia",
    isoCode: "hr",
    fifaRank: "7",
    nationsLeagueGroup: "A1",
    latitude: "45.815010",
    longitude: "15.579452",
  },
  {
    name: "Cyprus",
    isoCode: "cy",
    fifaRank: "105",
    nationsLeagueGroup: "C2",
    latitude: "35.126413",
    longitude: "33.429859",
  },
  {
    name: "Czech Republic",
    isoCode: "cz",
    fifaRank: "23",
    nationsLeagueGroup: "A2",
    latitude: "49.817492",
    longitude: "15.473092",
  },
  {
    name: "Denmark",
    isoCode: "dk",
    fifaRank: "17",
    nationsLeagueGroup: "A2",
    latitude: "56.263920",
    longitude: "9.501785",
  },
  {
    name: "England",
    isoCode: "gb-eng",
    fifaRank: "5",
    nationsLeagueGroup: "A4",
    latitude: "52.355518",
    longitude: "-1.174351",
  },
  {
    name: "Estonia",
    isoCode: "ee",
    fifaRank: "108",
    nationsLeagueGroup: "D1",
    latitude: "58.595272",
    longitude: "25.912717",
  },
  {
    name: "Faroe Islands",
    isoCode: "fo",
    fifaRank: "111",
    nationsLeagueGroup: "D2",
    latitude: "61.892635",
    longitude: "-6.911806",
  },
  {
    name: "Finland",
    isoCode: "fi",
    fifaRank: "57",
    nationsLeagueGroup: "B3",
    latitude: "61.924110",
    longitude: "24.935459",
  },
  {
    name: "France",
    isoCode: "fr",
    fifaRank: "3",
    nationsLeagueGroup: "A3",
    latitude: "46.227638",
    longitude: "2.213749",
  },
  {
    name: "Georgia",
    isoCode: "ge",
    fifaRank: "117",
    nationsLeagueGroup: "D1",
    latitude: "42.315407",
    longitude: "43.356892",
  },
  {
    name: "Germany",
    isoCode: "de",
    fifaRank: "11",
    nationsLeagueGroup: "A3",
    latitude: "51.165691",
    longitude: "10.451526",
  },
  {
    name: "Greece",
    isoCode: "gr",
    fifaRank: "47",
    nationsLeagueGroup: "B4",
    latitude: "39.074208",
    longitude: "21.824312",
  },
  {
    name: "Hungary",
    isoCode: "hu",
    fifaRank: "40",
    nationsLeagueGroup: "A2",
    latitude: "47.162491",
    longitude: "19.503304",
  },
  {
    name: "Iceland",
    isoCode: "is",
    fifaRank: "61",
    nationsLeagueGroup: "B4",
    latitude: "64.963051",
    longitude: "-17.020835",
  },
  {
    name: "Ireland",
    isoCode: "ie",
    fifaRank: "49",
    nationsLeagueGroup: "B1",
    latitude: "53.412910",
    longitude: "-8.243890",
  },
  {
    name: "Italy",
    isoCode: "it",
    fifaRank: "6",
    nationsLeagueGroup: "A1",
    latitude: "41.871941",
    longitude: "12.567380",
  },
  {
    name: "Israel",
    isoCode: "il",
    fifaRank: "114",
    nationsLeagueGroup: "C3",
    latitude: "31.046051",
    longitude: "34.851612",
  },
  {
    name: "Kazakhstan",
    isoCode: "kz",
    fifaRank: "103",
    nationsLeagueGroup: "C1",
    latitude: "48.019589",
    longitude: "54.923684",
  },
  {
    name: "Kosovo",
    isoCode: "xk",
    fifaRank: "107",
    nationsLeagueGroup: "C2",
    latitude: "42.602636",
    longitude: "20.902981",
  },
  {
    name: "Latvia",
    isoCode: "lv",
    fifaRank: "135",
    nationsLeagueGroup: "D1",
    latitude: "56.949646",
    longitude: "24.105186",
  },
  {
    name: "Liechtenstein",
    isoCode: "li",
    fifaRank: "192",
    nationsLeagueGroup: "D1",
    latitude: "47.166000",
    longitude: "9.555373",
  },
  {
    name: "Lithuania",
    isoCode: "lt",
    fifaRank: "113",
    nationsLeagueGroup: "D1",
    latitude: "54.689652",
    longitude: "25.279959",
  },

  {
    name: "Luxembourg",
    isoCode: "lu",
    fifaRank: "96",
    nationsLeagueGroup: "D1",
    latitude: "49.815273",
    longitude: "6.129583",
  },
  {
    name: "Malta",
    isoCode: "mt",
    fifaRank: "174",
    nationsLeagueGroup: "D2",
    latitude: "35.937496",
    longitude: "14.375416",
  },
  {
    name: "Moldova",
    isoCode: "md",
    fifaRank: "171",
    nationsLeagueGroup: "D2",
    latitude: "47.411653",
    longitude: "28.833887",
  },
  {
    name: "Montenegro",
    isoCode: "me",
    fifaRank: "73",
    nationsLeagueGroup: "C4",
    latitude: "42.506389",
    longitude: "19.408850",
  },
  {
    name: "Netherlands",
    isoCode: "nl",
    fifaRank: "10",
    nationsLeagueGroup: "A1",
    latitude: "52.132633",
    longitude: "5.291266",
  },
  {
    name: "Northern Ireland",
    isoCode: "gb-nir",
    fifaRank: "59", // As of November 2023
    nationsLeagueGroup: "C1",
    latitude: "54.609323",
    longitude: "-6.131386",
  },
  {
    name: "North Macedonia",
    isoCode: "mk",
    fifaRank: "67",
    nationsLeagueGroup: "C4",
    latitude: "41.608635",
    longitude: "21.745275",
  },
  {
    name: "Norway",
    isoCode: "no",
    fifaRank: "48",
    nationsLeagueGroup: "B3",
    latitude: "59.91129366297636",
    longitude: "10.753603061457929",
  },
  {
    name: "Poland",
    isoCode: "pl",
    fifaRank: "15",
    nationsLeagueGroup: "A4",
    latitude: "51.919438",
    longitude: "19.145136",
  },
  {
    name: "Portugal",
    isoCode: "pt",
    fifaRank: "9",
    nationsLeagueGroup: "A4",
    latitude: "39.399872",
    longitude: "-8.224454",
  },
  {
    name: "Republic of Ireland",
    isoCode: "ie",
    fifaRank: "49",
    nationsLeagueGroup: "B1",
    latitude: "53.412910",
    longitude: "-8.243890",
  },
  {
    name: "Romania",
    isoCode: "ro",
    fifaRank: "46",
    nationsLeagueGroup: "B4",
    latitude: "45.943161",
    longitude: "24.966760",
  },
  {
    name: "San Marino",
    isoCode: "sm",
    fifaRank: "211",
    nationsLeagueGroup: "D2",
    latitude: "43.942360",
    longitude: "12.457777",
  },
  {
    name: "Scotland",
    isoCode: "gb-sct",
    fifaRank: "38", // As of November 2023
    nationsLeagueGroup: "B2",
    latitude: "56.492000",
    longitude: "-3.201000",
  },
  {
    name: "Serbia",
    isoCode: "rs",
    fifaRank: "22",
    nationsLeagueGroup: "A3",
    latitude: "44.016521",
    longitude: "21.005859",
  },
  {
    name: "Slovakia",
    isoCode: "sk",
    fifaRank: "53",
    nationsLeagueGroup: "B1",
    latitude: "48.669026",
    longitude: "19.699024",
  },
  {
    name: "Slovenia",
    isoCode: "si",
    fifaRank: "64",
    nationsLeagueGroup: "B2",
    latitude: "46.151241",
    longitude: "14.995463",
  },
  {
    name: "Spain",
    isoCode: "es",
    fifaRank: "8",
    nationsLeagueGroup: "A2",
    latitude: "40.463667",
    longitude: "-3.749220",
  },
  {
    name: "Sweden",
    isoCode: "se",
    fifaRank: "20",
    nationsLeagueGroup: "A1",
    latitude: "60.128161",
    longitude: "18.643501",
  },
  {
    name: "Switzerland",
    isoCode: "ch",
    fifaRank: "16",
    nationsLeagueGroup: "A4",
    latitude: "46.818188",
    longitude: "8.227512",
  },
  {
    name: "Turkey",
    isoCode: "tr",
    fifaRank: "39",
    nationsLeagueGroup: "B2",
    latitude: "38.963745",
    longitude: "35.243322",
  },
  {
    name: "Ukraine",
    isoCode: "ua",
    fifaRank: "27",
    nationsLeagueGroup: "B1",
    latitude: "49.838268",
    longitude: "31.165580",
  },
  {
    name: "Wales",
    isoCode: "gb-wls",
    fifaRank: "28",
    nationsLeagueGroup: "A4",
    latitude: "52.130858",
    longitude: "-3.988022",
  },
  {
    name: "Gibraltar",
    isoCode: "gi",
    fifaRank: "194",
    nationsLeagueGroup: "D2",
    latitude: "36.140740",
    longitude: "-5.351330",
  },
];

var data = []


const minLat = countries.reduce(
  (min, country) => Math.min(min, country.latitude),
  200
);
const maxLat = countries.reduce(
  (max, country) => Math.max(max, country.latitude),
  -200
);
const minLong = countries.reduce(
  (min, country) => Math.min(min, country.longitude),
  200
);
const maxLong = countries.reduce(
  (max, country) => Math.max(max, country.longitude),
  -200
);
var svg = d3.select("svg");
var svgWidth = parseInt(svg.style("width"));
var svgHeight = window.innerHeight;
var mapHeight = Math.min(svgWidth, svgHeight / 2);

var xPadding = svgWidth * 0.06;
var yPadding = svgHeight * 0.06;

var flagSize = svgHeight/40

var scaleLong = d3.scaleLinear(
  [minLong, maxLong],
  [0 + xPadding, svgWidth - xPadding]
);
var scaleLat = d3.scaleLinear(
  [minLat, maxLat],
  [mapHeight - yPadding, 0 + yPadding]
);

// initialize the scrollama
var scroller = scrollama();

// generic window resize listener event
function handleResize() {
  // 1. update height of step elements
  var stepH = Math.floor(window.innerHeight * 0.9);
  step.style("height", stepH + "px");
  /*
  svg = d3.select("svg");
  var svgWidth = parseInt(svg.style("width"));
  var svgHeight = window.innerHeight;
  var mapHeight = Math.min(svgWidth, svgHeight / 2);

  var xPadding = svgWidth * 0.06;
  var yPadding = svgHeight * 0.06;

  var scaleLong = d3.scaleLinear(
    [minLong, maxLong],
    [0 + xPadding, svgWidth - xPadding]
  );
  var scaleLat = d3.scaleLinear(
    [minLat, maxLat],
    [mapHeight - yPadding, 0 + yPadding]
  );
  svg
    .selectAll("image")
    .data(countries)
    .join(
      (_) => _,
      (update) =>
        update
          .attr("x", (d) => scaleLong(d.longitude))
          .attr("y", (d) => scaleLat(d.latitude)),
      (_) => _
    );
*/
  var figureHeight = window.innerHeight;
  var figureMarginTop = (window.innerHeight - figureHeight) / 2;

  figure
    .style("height", figureHeight + "px")
    .style("top", figureMarginTop + "px");

  // 3. tell scrollama to update new element dimensions
  scroller.resize();
}

// Create flags
function drawFlagsOnMap() {
  svg
    .selectAll("image")
    .data(countries)
    .join(
      (enter) =>
        enter
          .append("svg:image")
          .attr("id", (d) => d.name)
          .attr("x", (d) => scaleLong(d.longitude))
          .attr("y", (d) => scaleLat(d.latitude))
          .attr("width", flagSize)
          .attr("height", flagSize)
          .attr(
            "xlink:href",
            (d) =>
              "https://hatscripts.github.io/circle-flags/flags/" +
              d.isoCode +
              ".svg"
          ),
      (update) =>
        update
          .attr("id", (d) => d.name)
          .attr("x", (d) => scaleLong(d.longitude))
          .attr("y", (d) => scaleLat(d.latitude))
          .attr("width", flagSize)
          .attr("height", flagSize)
          .attr(
            "xlink:href",
            (d) =>
              "https://hatscripts.github.io/circle-flags/flags/" +
              d.isoCode +
              ".svg"
          ),
      (exit) => exit.remove()
    );
}
//
// Steps
//
function step1() {
  console.log("step 1");
  svg
    .selectAll("image")
    .data(hosts)
    .join((enter) =>
      enter
        .append("svg:image")
        .attr("id", (d) => d.name)
        .attr("x", (d) => d.x)
        .attr("y", (d) => d.y)
        .attr("width", flagSize*3 )
        .attr("height", flagSize*3)
        .attr(
          "xlink:href",
          (d) =>
            "https://hatscripts.github.io/circle-flags/flags/" +
            d.isoCode +
            ".svg"
        ),
        (update) => update,
        (exit) => exit.attr("opacity", 0).remove()
    );
}

function step2() {
  console.log("step 2");
  drawFlagsOnMap();
}

// scrollama event handlers
function handleStepEnter(response) {
  // add color to current step only
  step.classed("is-active", function (d, i) {
    return i === response.index;
  });
  console.log("Enter step ", response.index);

  switch (response.index) {
    case 0:
        step1();
    case 1:
      step1();
    case 2:
      step2();
  }

  // update graphic based on step
  figure
    .select("p")
    .text(response.index + 1)
    .style("opacity", 0.2);
}

function init() {
  // 1. force a resize on load to ensure proper dimensions are sent to scrollama

  handleResize();
  addEventListener("resize", (event) => handleResize());
  step1()

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
