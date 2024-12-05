// using d3 for convenience
var main = d3.select("main");
var scrolly = main.select("#scrolly");
var figure = scrolly.select("figure");
var article = scrolly.select("article");
var step = article.selectAll(".step");

// SIZES
var svg = d3.select("svg");
var svgWidth = parseInt(svg.style("width"));
var svgHeight = window.innerHeight;
var mapHeight = Math.min(svgWidth, svgHeight / 2);
var xPadding = svgWidth * 0.06;
var yPadding = svgHeight * 0.06;
var flagSize = svgHeight / 40;
var bigFlagSize = flagSize * 3;
var flagPadding = flagSize / 3;

// CONSTANTS
const duration = 400;

// DATA
const hosts = [
  {
    name: "USA",
    isoCode: "us",
    x: svgWidth / 2 - bigFlagSize / 2,
    y: svgHeight / 3 - bigFlagSize - flagSize,
  },
  {
    name: "Canada",
    isoCode: "ca",
    x: svgWidth / 2 - bigFlagSize - flagSize,
    y: svgHeight / 3,
  },
  {
    name: "Mexico",
    isoCode: "mx",
    x: svgWidth / 2 + flagSize,
    y: svgHeight / 3,
  },
];
const countries = [
  {
    name: "Albania",
    isoCode: "al",
    fifaRank: "82",
    nationsLeagueGroup: "B1",
    qualGroup: "B",
    nationsLeaguePosition: 4,
    latitude: "41.153332",
    longitude: "20.168169",
  },
  {
    name: "Andorra",
    isoCode: "ad",
    fifaRank: "157",
    nationsLeagueGroup: "D2",
    qualGroup: "B",
    nationsLeaguePosition: 3,
    latitude: "42.506305",
    longitude: "1.521801",
  },
  {
    name: "Armenia",
    isoCode: "am",
    fifaRank: "92",
    nationsLeagueGroup: "C4",
    qualGroup: "B",
    nationsLeaguePosition: 2,
    latitude: "40.069099",
    longitude: "45.039188",
  },
  {
    name: "Austria",
    isoCode: "at",
    fifaRank: "24",
    nationsLeagueGroup: "B3",
    qualGroup: "B",
    nationsLeaguePosition: 2,
    latitude: "47.809402",
    longitude: "13.055000",
  },
  {
    name: "Azerbaijan",
    isoCode: "az",
    fifaRank: "110",
    nationsLeagueGroup: "C1",
    qualGroup: "C",
    nationsLeaguePosition: 4,
    latitude: "40.399133",
    longitude: "47.576927",
  },
  {
    name: "Belarus",
    isoCode: "by",
    fifaRank: "75",
    nationsLeagueGroup: "C3",
    qualGroup: "C",
    nationsLeaguePosition: 3,
    latitude: "53.709807",
    longitude: "27.953389",
  },
  {
    name: "Belgium",
    isoCode: "be",
    fifaRank: "21",
    nationsLeagueGroup: "A2",
    qualGroup: "C",
    nationsLeaguePosition: 3,
    latitude: "50.503887",
    longitude: "4.469936",
  },
  {
    name: "Bosnia and Herzegovina",
    isoCode: "ba",
    fifaRank: "62",
    nationsLeagueGroup: "A3",
    qualGroup: "C",
    nationsLeaguePosition: 4,
    latitude: "44.204791",
    longitude: "17.795321",
  },
  {
    name: "Bulgaria",
    isoCode: "bg",
    fifaRank: "78",
    nationsLeagueGroup: "C3",
    qualGroup: "D",
    nationsLeaguePosition: 2,
    latitude: "42.733882",
    longitude: "25.485830",
  },
  {
    name: "Croatia",
    isoCode: "hr",
    fifaRank: "7",
    nationsLeagueGroup: "A1",
    qualGroup: "D",
    nationsLeaguePosition: 2,
    latitude: "45.815010",
    longitude: "15.579452",
  },
  {
    name: "Cyprus",
    isoCode: "cy",
    fifaRank: "105",
    nationsLeagueGroup: "C2",
    qualGroup: "D",
    nationsLeaguePosition: 3,
    latitude: "35.126413",
    longitude: "33.429859",
  },
  {
    name: "Czech Republic",
    isoCode: "cz",
    fifaRank: "23",
    nationsLeagueGroup: "B1",
    qualGroup: "D",
    nationsLeaguePosition: 1,
    latitude: "49.817492",
    longitude: "15.473092",
  },
  {
    name: "Denmark",
    isoCode: "dk",
    fifaRank: "17",
    nationsLeagueGroup: "A4",
    qualGroup: "E",
    nationsLeaguePosition: 2,
    latitude: "56.263920",
    longitude: "9.501785",
  },
  {
    name: "England",
    isoCode: "gb-eng",
    fifaRank: "5",
    nationsLeagueGroup: "B2",
    qualGroup: "E",
    nationsLeaguePosition: 1,
    latitude: "52.355518",
    longitude: "-1.174351",
  },
  {
    name: "Estonia",
    isoCode: "ee",
    fifaRank: "108",
    nationsLeagueGroup: "C1",
    qualGroup: "E",
    nationsLeaguePosition: 3,
    latitude: "58.595272",
    longitude: "25.912717",
  },
  {
    name: "Faroe Islands",
    isoCode: "fo",
    fifaRank: "111",
    nationsLeagueGroup: "C4",
    qualGroup: "E",
    nationsLeaguePosition: 3,
    latitude: "61.892635",
    longitude: "-6.911806",
  },
  {
    name: "Finland",
    isoCode: "fi",
    fifaRank: "57",
    nationsLeagueGroup: "B2",
    qualGroup: "F",
    nationsLeaguePosition: 4,
    latitude: "61.924110",
    longitude: "24.935459",
  },
  {
    name: "France",
    isoCode: "fr",
    fifaRank: "3",
    nationsLeagueGroup: "A2",
    qualGroup: "F",
    nationsLeaguePosition: 1,
    latitude: "46.227638",
    longitude: "2.213749",
  },
  {
    name: "Georgia",
    isoCode: "ge",
    fifaRank: "117",
    nationsLeagueGroup: "B1",
    qualGroup: "F",
    nationsLeaguePosition: 3,
    latitude: "42.315407",
    longitude: "43.356892",
  },
  {
    name: "Germany",
    isoCode: "de",
    fifaRank: "11",
    nationsLeagueGroup: "A3",
    qualGroup: "F",
    nationsLeaguePosition: 1,
    latitude: "51.165691",
    longitude: "10.451526",
  },
  {
    name: "Greece",
    isoCode: "gr",
    fifaRank: "47",
    nationsLeagueGroup: "B2",
    qualGroup: "G",
    nationsLeaguePosition: 2,
    latitude: "39.074208",
    longitude: "21.824312",
  },
  {
    name: "Hungary",
    isoCode: "hu",
    fifaRank: "40",
    nationsLeagueGroup: "A3",
    qualGroup: "G",
    nationsLeaguePosition: 3,
    latitude: "47.162491",
    longitude: "19.503304",
  },
  {
    name: "Iceland",
    isoCode: "is",
    fifaRank: "61",
    nationsLeagueGroup: "B4",
    qualGroup: "G",
    nationsLeaguePosition: 3,
    latitude: "64.963051",
    longitude: "-17.020835",
  },
  {
    name: "Ireland",
    isoCode: "ie",
    fifaRank: "49",
    nationsLeagueGroup: "B2",
    qualGroup: "G",
    nationsLeaguePosition: 3,
    latitude: "53.412910",
    longitude: "-8.243890",
  },
  {
    name: "Italy",
    isoCode: "it",
    fifaRank: "6",
    nationsLeagueGroup: "A2",
    qualGroup: "G",
    nationsLeaguePosition: 2,
    latitude: "41.871941",
    longitude: "12.567380",
  },
  {
    name: "Israel",
    isoCode: "il",
    fifaRank: "114",
    nationsLeagueGroup: "A2",
    qualGroup: "H",
    nationsLeaguePosition: 4,
    latitude: "31.046051",
    longitude: "34.851612",
  },
  {
    name: "Kazakhstan",
    isoCode: "kz",
    fifaRank: "103",
    nationsLeagueGroup: "B3",
    qualGroup: "H",
    nationsLeaguePosition: 4,
    latitude: "48.019589",
    longitude: "54.923684",
  },
  {
    name: "Kosovo",
    isoCode: "xk",
    fifaRank: "107",
    nationsLeagueGroup: "C2",
    qualGroup: "H",
    nationsLeaguePosition: 2,
    latitude: "42.602636",
    longitude: "20.902981",
  },
  {
    name: "Latvia",
    isoCode: "lv",
    fifaRank: "135",
    nationsLeagueGroup: "C4",
    qualGroup: "H",
    nationsLeaguePosition: 4,
    latitude: "56.949646",
    longitude: "24.105186",
  },
  {
    name: "Liechtenstein",
    isoCode: "li",
    fifaRank: "192",
    nationsLeagueGroup: "D1",
    qualGroup: "H",
    nationsLeaguePosition: 3,
    latitude: "47.166000",
    longitude: "9.555373",
  },
  {
    name: "Lithuania",
    isoCode: "lt",
    fifaRank: "113",
    nationsLeagueGroup: "C2",
    qualGroup: "I",
    nationsLeaguePosition: 4,
    latitude: "54.689652",
    longitude: "25.279959",
  },

  {
    name: "Luxembourg",
    isoCode: "lu",
    fifaRank: "96",
    nationsLeagueGroup: "C3",
    qualGroup: "I",
    nationsLeaguePosition: 4,
    latitude: "49.815273",
    longitude: "6.129583",
  },
  {
    name: "Malta",
    isoCode: "mt",
    fifaRank: "174",
    nationsLeagueGroup: "D2",
    qualGroup: "I",
    nationsLeaguePosition: 2,
    latitude: "35.937496",
    longitude: "14.375416",
  },
  {
    name: "Moldova",
    isoCode: "md",
    fifaRank: "171",
    nationsLeagueGroup: "D2",
    qualGroup: "I",
    nationsLeaguePosition: 1,
    latitude: "47.411653",
    longitude: "28.833887",
  },
  {
    name: "Montenegro",
    isoCode: "me",
    fifaRank: "73",
    nationsLeagueGroup: "B4",
    qualGroup: "I",
    nationsLeaguePosition: 4,
    latitude: "42.506389",
    longitude: "19.408850",
  },
  {
    name: "Netherlands",
    isoCode: "nl",
    fifaRank: "10",
    nationsLeagueGroup: "A3",
    qualGroup: "J",
    nationsLeaguePosition: 2,
    latitude: "52.132633",
    longitude: "5.291266",
  },
  {
    name: "Northern Ireland",
    isoCode: "gb-nir",
    fifaRank: "59", // As of November 2023
    nationsLeagueGroup: "C3",
    qualGroup: "J",
    nationsLeaguePosition: 1,
    latitude: "54.609323",
    longitude: "-6.131386",
  },
  {
    name: "North Macedonia",
    isoCode: "mk",
    fifaRank: "67",
    nationsLeagueGroup: "C4",
    qualGroup: "J",
    nationsLeaguePosition: 1,
    latitude: "41.608635",
    longitude: "21.745275",
  },
  {
    name: "Norway",
    isoCode: "no",
    fifaRank: "48",
    nationsLeagueGroup: "B3",
    qualGroup: "J",
    nationsLeaguePosition: 1,
    latitude: "59.91129366297636",
    longitude: "10.753603061457929",
  },
  {
    name: "Poland",
    isoCode: "pl",
    fifaRank: "15",
    nationsLeagueGroup: "A1",
    qualGroup: "J",
    nationsLeaguePosition: 4,
    latitude: "51.919438",
    longitude: "19.145136",
  },
  {
    name: "Portugal",
    isoCode: "pt",
    fifaRank: "9",
    nationsLeagueGroup: "A1",
    qualGroup: "K",
    nationsLeaguePosition: 1,
    latitude: "39.399872",
    longitude: "-8.224454",
  },
  {
    name: "Romania",
    isoCode: "ro",
    fifaRank: "46",
    nationsLeagueGroup: "C2",
    qualGroup: "K",
    nationsLeaguePosition: 1,
    latitude: "45.943161",
    longitude: "24.966760",
  },
  {
    name: "San Marino",
    isoCode: "sm",
    fifaRank: "211",
    nationsLeagueGroup: "D1",
    qualGroup: "K",
    nationsLeaguePosition: 1,
    latitude: "43.942360",
    longitude: "12.457777",
  },
  {
    name: "Scotland",
    isoCode: "gb-sct",
    fifaRank: "38", // As of November 2023
    nationsLeagueGroup: "A1",
    qualGroup: "K",
    nationsLeaguePosition: 3,
    latitude: "56.492000",
    longitude: "-3.201000",
  },
  {
    name: "Serbia",
    isoCode: "rs",
    fifaRank: "22",
    nationsLeagueGroup: "A4",
    qualGroup: "K",
    nationsLeaguePosition: 3,
    latitude: "44.016521",
    longitude: "21.005859",
  },
  {
    name: "Slovakia",
    isoCode: "sk",
    fifaRank: "53",
    nationsLeagueGroup: "C1",
    qualGroup: "L",
    nationsLeaguePosition: 2,
    latitude: "48.669026",
    longitude: "19.699024",
  },
  {
    name: "Slovenia",
    isoCode: "si",
    fifaRank: "64",
    nationsLeagueGroup: "B3",
    qualGroup: "L",
    nationsLeaguePosition: 3,
    latitude: "46.151241",
    longitude: "14.995463",
  },
  {
    name: "Spain",
    isoCode: "es",
    fifaRank: "8",
    nationsLeagueGroup: "A4",
    qualGroup: "L",
    nationsLeaguePosition: 1,
    latitude: "40.463667",
    longitude: "-3.749220",
  },
  {
    name: "Sweden",
    isoCode: "se",
    fifaRank: "20",
    nationsLeagueGroup: "C1",
    qualGroup: "L",
    nationsLeaguePosition: 1,
    latitude: "60.128161",
    longitude: "18.643501",
  },
  {
    name: "Switzerland",
    isoCode: "ch",
    fifaRank: "16",
    nationsLeagueGroup: "A4",
    qualGroup: "L",
    nationsLeaguePosition: 4,
    latitude: "46.818188",
    longitude: "8.227512",
  },
  {
    name: "Turkey",
    isoCode: "tr",
    fifaRank: "39",
    nationsLeagueGroup: "B4",
    qualGroup: "A",
    nationsLeaguePosition: 2,
    latitude: "38.963745",
    longitude: "35.243322",
  },
  {
    name: "Ukraine",
    isoCode: "ua",
    fifaRank: "27",
    nationsLeagueGroup: "B1",
    qualGroup: "A",
    nationsLeaguePosition: 2,
    latitude: "49.838268",
    longitude: "31.165580",
  },
  {
    name: "Wales",
    isoCode: "gb-wls",
    fifaRank: "28",
    nationsLeagueGroup: "B4",
    qualGroup: "A",
    nationsLeaguePosition: 1,
    latitude: "52.130858",
    longitude: "-3.988022",
  },
  {
    name: "Gibraltar",
    isoCode: "gi",
    fifaRank: "194",
    nationsLeagueGroup: "D1",
    qualGroup: "A",
    nationsLeaguePosition: 2,
    latitude: "36.140740",
    longitude: "-5.351330",
  },
];
const circles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// GLOBAL DATA
var data = [];
var circleData = [];
var textData = [];

//HELPERS
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

var scaleLong = d3.scaleLinear(
  [minLong, maxLong],
  [0 + xPadding, svgWidth - xPadding]
);
var scaleLat = d3.scaleLinear(
  [minLat, maxLat],
  [mapHeight + yPadding, 0 + yPadding]
);

var groupBy = function (xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

// initialize the scrollama
var scroller = scrollama();

//DRAWING FUNCTIONS
function drawFlags() {
  svg
    .selectAll("image")
    .data(data, d => d.isoCode)
    .join(
      (enter) =>
        enter
          .append("svg:image")
          .attr(
            "xlink:href",
            (d) =>
              "https://hatscripts.github.io/circle-flags/flags/" +
              d.isoCode +
              ".svg"
          )
          .attr("id", (d) => d.isoCode)
          .attr("x", (d) => d.x)
          .attr("y", (d) => d.y)
          .attr("width", (d) => d.size)
          .attr("height", (d) => d.size)
          .attr("opacity", (d) => d.opacity ?? 1),
      (update) =>
        update
          .attr(
            "xlink:href",
            (d) =>
              "https://hatscripts.github.io/circle-flags/flags/" +
              d.isoCode +
              ".svg"
          )
          .attr("id", (d) => d.isoCode),
      (exit) =>
        exit.transition().duration(duration).style("opacity", 0).remove()
    )
    .attr("id", (d) => d.isoCode)
    .transition()
    .delay((d) => d.delay || 0)
    .duration((d) => d.duration || duration)
    .attr("x", (d) => d.x)
    .attr("y", (d) => d.y)
    .attr("width", (d) => d.size)
    .attr("height", (d) => d.size)
    .attr("opacity", (d) => d.opacity ?? 1);
}

function drawCircles() {
  svg
    .selectAll("circle")
    .data(circleData)
    .join(
      (enter) =>
        enter
          .append("circle")
          .attr("r", flagSize / 2)
          .attr("cx", svgWidth / 8)
          .attr("cy", (d) => d * 2 * flagSize)
          .style("opacity", 0)
          .attr("stroke", "black")
          .attr("stroke-width", 3)
          .attr("fill", "gold"),
      (update) => update,
      (exit) =>
        exit
          .transition()
          .duration(duration)
          .attr("cx", -100)
          .style("opacity", 0)
          .remove()
    )
    .transition()
    .duration(duration)
    .style("opacity", 1);
}

function drawGroupNames() {
  svg
    .selectAll("text.groupname")
    .data(textData)
    .join(
      (enter) =>
        enter
          .append("text")
          .attr("class", "groupname")
          .text((d) => d.text)
          .attr("x", (d) => d.x)
          .attr("y", (d) => d.y)
          .style("opacity", 0)
          .style("font-size", flagSize),
      (update) =>
        update
          .text((d) => d.text)
          .style("opacity", 0.85)
          .attr("x", (d) => d.x)
          .attr("y", (d) => d.y),
      (exit) =>
        exit
          .transition()
          .duration(duration * 2)
          .style("opacity", 0)
          .remove()
    )
    .transition()
    .duration(400)
    .attr("x", (d) => d.x)
    .attr("y", (d) => d.y)
    .style("opacity", 0.85);
}

function redraw() {
  drawCircles();
  drawFlags();
  drawGroupNames();
}

//
// Steps
//
function startScreen() {
  console.log("startscreen");
  data = hosts.map((country) => ({
    isoCode: country.isoCode,
    name: country.name,
    x: country.x,
    y: country.y,
    size: bigFlagSize,
  }));
  circleData = [];
  redraw();
}

function step1() {
  data = hosts.map((c) => ({
    isoCode: c.isoCode,
    x: svgWidth * 2,
    y: mapHeight / 2,
    size: 2 * flagSize,
    opacity: 0,
  }));

  data = data.concat(
    countries.map((c) => ({
      isoCode: c.isoCode,
      x: svgWidth * 2,
      y: mapHeight / 2,
      size: 10 * flagSize,
      opacity: 0,
    }))
  );
  circleData = circles;

  redraw();
}

function step2() {
  textData = [];
  data = countries.map((c, i) => ({
    isoCode: c.isoCode,
    name: c.name,
    x: scaleLong(c.longitude),
    y: scaleLat(c.latitude),
    size: flagSize,
    delay: 30 * i,
  }));
  circleData = [];
  textData = [];

  redraw();
}

function getNlX(group) {
  if (group.includes("1")) {
    return svgWidth / 5;
  }
  if (group.includes("2")) {
    return (2 * svgWidth) / 5;
  }
  if (group.includes("3")) {
    return (3 * svgWidth) / 5;
  }
  if (group.includes("4")) {
    return (4 * svgWidth) / 5;
  }
}
function getNlY(group, i) {
  if (group.includes("A")) {
    return svgHeight / 5 + i * (flagSize + flagPadding);
  }
  if (group.includes("B")) {
    return (2 * svgHeight) / 5 + i * (flagSize + flagPadding);
  }
  if (group.includes("C")) {
    return (3 * svgHeight) / 5 + i * (flagSize + flagPadding);
  }
  if (group.includes("D")) {
    return (4 * svgHeight) / 5 + i * (flagSize + flagPadding);
  }
}

function getYforHeader(group) {
  if (group.includes("A")) {
    return svgHeight / 5 - flagSize / 2;
  }
  if (group.includes("B")) {
    return (2 * svgHeight) / 5 - flagSize / 2;
  }
  if (group.includes("C")) {
    return (3 * svgHeight) / 5 - flagSize / 2;
  }
  if (group.includes("D")) {
    return (4 * svgHeight) / 5 - flagSize / 2;
  }
}
function step3() {
  data = [];
  const nationsLeagueGroups = groupBy(countries, "nationsLeagueGroup");
  Object.keys(nationsLeagueGroups).map((key, j) => {
    nationsLeagueGroups[key].map((c, i) =>
      data.push({
        isoCode: c.isoCode,
        x: getNlX(key),
        y: getNlY(key, i),
        size: flagSize,
        opacity: 1,
        delay: j * 100,
      })
    );
  });
  textData = Object.keys(nationsLeagueGroups).map((key) => ({
    text: key,
    x: getNlX(key) - flagSize / 7,
    y: getYforHeader(key),
  }));
  redraw();
}

function sortNLGroups() {
  data = [];
  const nationsLeagueGroups = groupBy(countries, "nationsLeagueGroup");
  Object.keys(nationsLeagueGroups).map((key, i) => {
    nationsLeagueGroups[key].map((c) =>
      data.push({
        isoCode: c.isoCode,
        x: getNlX(key),
        y: getNlY(key, c.nationsLeaguePosition - 1),
        size: flagSize,
        opacity: 1,
        delay: 100 + i * 80,
      })
    );
  });
  textData = Object.keys(nationsLeagueGroups).map((key) => ({
    text: key,
    x: getNlX(key) - flagSize / 7,
    y: getYforHeader(key),
  }));
  redraw();
}

function getQualX(groupNumber) {
  if (groupNumber % 3 == 0) {
    return svgWidth / 5;
  }
  if (groupNumber % 3 == 1) {
    return (2 * svgWidth) / 5;
  }
  if (groupNumber % 3 == 2) {
    return (3 * svgWidth) / 5;
  }
}
function getQualY(groupNumber, j) {
  if (groupNumber <= 3) {
    return svgHeight / 10 + j * (flagSize + flagPadding);
  }
  if (groupNumber >= 4 && groupNumber <= 6) {
    return 3 * (svgHeight / 10) + j * (flagSize + flagPadding);
  }
  if (groupNumber >= 7 && groupNumber <= 9) {
    return 5 * (svgHeight / 10) + j * (flagSize + flagPadding);
  }
  if (groupNumber >= 10 && groupNumber <= 12) {
    return 7.5 * (svgHeight / 10) + j * (flagSize + flagPadding);
  }
}
function getQualYforHeader(groupNumber) {
  if (groupNumber <= 3) {
    return svgHeight / 10 - 0.6 * flagSize;
  }
  if (groupNumber >= 4 && groupNumber <= 6) {
    return 3 * (svgHeight / 10) - 0.6 * flagSize;
  }
  if (groupNumber >= 7 && groupNumber <= 9) {
    return 5 * (svgHeight / 10) - 0.6 * flagSize;
  }
  if (groupNumber >= 10 && groupNumber <= 12) {
    return 7.5 * (svgHeight / 10) - 0.6 * flagSize;
  }
}

function sortQualGroups() {
  data = [];
  const qualGroups = groupBy(countries, "qualGroup");
  Object.keys(qualGroups)
    .sort()
    .map((key, i) => {
      qualGroups[key].map((c, j) =>
        data.push({
          isoCode: c.isoCode,
          x: getQualX(i),
          y: getQualY(i + 1, j),
          size: flagSize,
          opacity: 1,
          delay: 100 + i * 80,
        })
      );
    });
  textData = Object.keys(qualGroups)
    .sort()
    .map((key, i) => ({
      text: key,
      x: getQualX(i) + 0.2*flagSize,
      y: getQualYforHeader(i + 1),
    }));
  redraw();
}

// scrollama event handlers
function handleStepEnter(response) {
  // add color to current step only
  step.classed("is-active", function (d, i) {
    return i === response.index;
  });
  // update graphic based on step
  figure.select("p").text(response.index).style("opacity", 0.2);

  console.log("Enter step ", response.index, " - dir: " + response.direction);

  switch (response.index) {
    case 0:
      startScreen();
      break;
    case 1:
      step1();
      break;
    case 2:
      step2();
      break;
    case 3:
      step3();
      break;
    case 4:
      sortNLGroups();
      break;
    case 5:
      sortQualGroups();
      break;
  }
}

// generic window resize listener event
function handleResize() {
  console.log("resizing..");
  console.log();
  // 1. update height of step elements
  var stepH = Math.floor(window.innerHeight * 0.9);
  step.style("height", stepH + "px");

  var figureHeight = window.innerHeight;
  var figureMarginTop = (window.innerHeight - figureHeight) / 2;

  figure
    .style("height", figureHeight + "px")
    .style("top", figureMarginTop + "px");

  svg = d3.select("svg").style("height", figureHeight + "px");
  redraw();
  // 3. tell scrollama to update new element dimensions
  scroller.resize();
}

function init() {
  // 1. force a resize on load to ensure proper dimensions are sent to scrollama

  handleResize();
  addEventListener("resize", () => handleResize());
  startScreen();

  // 2. setup the scroller passing options
  // 		this will also initialize trigger observations
  // 3. bind scrollama event handlers (this can be chained like below)
  scroller
    .setup({
      step: "#scrolly article .step",
      offset: 0.6,
      debug: false,
    })
    .onStepEnter(handleStepEnter);
}

// kick things off
init();
