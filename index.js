// using d3 for convenience
var main = d3.select("main");
var scrolly = main.select("#scrolly");
var figure =
  window.innerWidth > 600
    ? scrolly.select("#desktop-fig")
    : scrolly.select("#mobile-fig");
var article = scrolly.select("article");
var step = article.selectAll(".step");

// SIZES
var svg =
  window.innerWidth > 600
    ? d3.select("#desktop-svg")
    : d3.select("#mobile-svg");
var svgWidth = parseInt(svg.style("width"));
var svgHeight = window.innerHeight;
var xPadding = svgWidth * 0.06;
var yPadding = svgHeight * 0.06;
var flagSize = svgHeight / 40;
var bigFlagSize = flagSize * 3;
var flagPadding = flagSize / 3;

// CONSTANTS
const duration = 400;

// DATA
let hosts = [
  {
    name: "USA",
    isoCode: "us",
    x: () => svgWidth / 2 - bigFlagSize / 2,
    y: () => svgHeight / 3,
  },
  {
    name: "Canada",
    isoCode: "ca",
    x: () => svgWidth / 2 - bigFlagSize - flagSize,
    y: () => svgHeight / 3 + bigFlagSize,
  },
  {
    name: "Mexico",
    isoCode: "mx",
    x: () => svgWidth / 2 + flagSize,
    y: () => svgHeight / 3 + bigFlagSize,
  },
];
const countries = [
  {
    name: "Albania",
    isoCode: "al",
    fifaRank: "82",
    nationsLeagueGroup: "B1",
    qualGroup: "K",
    nationsLeaguePosition: 4,
    nlRank: 200,
    latitude: "41.153332",
    longitude: "20.168169",
  },
  {
    name: "Andorra",
    isoCode: "ad",
    fifaRank: "157",
    nationsLeagueGroup: "D2",
    qualGroup: "K",
    nationsLeaguePosition: 3,
    nlRank: 200,
    latitude: "42.506305",
    longitude: "1.521801",
  },
  {
    name: "Armenia",
    isoCode: "am",
    fifaRank: "92",
    nationsLeagueGroup: "C4",
    qualGroup: "F",
    nationsLeaguePosition: 2,
    nlRank: 200,
    latitude: "40.069099",
    longitude: "45.039188",
  },
  {
    name: "Austria",
    isoCode: "at",
    fifaRank: "24",
    nationsLeagueGroup: "B3",
    qualGroup: "H",
    nationsLeaguePosition: 2,
    nlRank: 200,
    latitude: "47.809402",
    longitude: "13.055000",
  },
  {
    name: "Azerbaijan",
    isoCode: "az",
    fifaRank: "110",
    nationsLeagueGroup: "C1",
    qualGroup: "D",
    nationsLeaguePosition: 4,
    nlRank: 200,
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
    nlRank: 200,
    latitude: "53.709807",
    longitude: "27.953389",
  },
  {
    name: "Belgium",
    isoCode: "be",
    fifaRank: "21",
    nationsLeagueGroup: "A2",
    qualGroup: "J",
    nationsLeaguePosition: 3,
    nlRank: 200,
    latitude: "50.503887",
    longitude: "4.469936",
  },
  {
    name: "Bosnia and Herzegovina",
    isoCode: "ba",
    fifaRank: "62",
    nationsLeagueGroup: "A3",
    qualGroup: "H",
    nationsLeaguePosition: 4,
    nlRank: 200,
    latitude: "44.204791",
    longitude: "17.795321",
  },
  {
    name: "Bulgaria",
    isoCode: "bg",
    fifaRank: "78",
    nationsLeagueGroup: "C3",
    qualGroup: "E",
    nationsLeaguePosition: 2,
    nlRank: 200,
    latitude: "42.733882",
    longitude: "25.485830",
  },
  {
    name: "Croatia",
    isoCode: "hr",
    fifaRank: "7",
    nationsLeagueGroup: "A1",
    qualGroup: "L",
    nationsLeaguePosition: 2,
    nlRank: 20,
    latitude: "45.815010",
    longitude: "15.579452",
  },
  {
    name: "Cyprus",
    isoCode: "cy",
    fifaRank: "105",
    nationsLeagueGroup: "C2",
    qualGroup: "H",
    nationsLeaguePosition: 3,
    nlRank: 200,
    latitude: "35.126413",
    longitude: "33.429859",
  },
  {
    name: "Czech Republic",
    isoCode: "cz",
    fifaRank: "23",
    nationsLeagueGroup: "B1",
    qualGroup: "L",
    nationsLeaguePosition: 1,
    nlRank: 8,
    latitude: "49.817492",
    longitude: "15.473092",
  },
  {
    name: "Denmark",
    isoCode: "dk",
    fifaRank: "17",
    nationsLeagueGroup: "A4",
    qualGroup: "F",
    nationsLeaguePosition: 2,
    nlRank: 18,
    latitude: "56.263920",
    longitude: "9.501785",
  },
  {
    name: "England",
    isoCode: "gb-eng",
    fifaRank: "5",
    nationsLeagueGroup: "B2",
    qualGroup: "K",
    nationsLeaguePosition: 1,
    nlRank: 5,
    latitude: "52.355518",
    longitude: "-1.174351",
  },
  {
    name: "Estonia",
    isoCode: "ee",
    fifaRank: "108",
    nationsLeagueGroup: "C1",
    qualGroup: "I",
    nationsLeaguePosition: 3,
    nlRank: 200,
    latitude: "58.595272",
    longitude: "25.912717",
  },
  {
    name: "Faroe Islands",
    isoCode: "fo",
    fifaRank: "111",
    nationsLeagueGroup: "C4",
    qualGroup: "L",
    nationsLeaguePosition: 3,
    nlRank: 200,
    latitude: "61.892635",
    longitude: "-6.911806",
  },
  {
    name: "Finland",
    isoCode: "fi",
    fifaRank: "57",
    nationsLeagueGroup: "B2",
    qualGroup: "G",
    nationsLeaguePosition: 4,
    nlRank: 200,
    latitude: "61.924110",
    longitude: "24.935459",
  },
  {
    name: "France",
    isoCode: "fr",
    fifaRank: "3",
    nationsLeagueGroup: "A2",
    qualGroup: "D",
    nationsLeaguePosition: 1,
    nlRank: 4,
    latitude: "46.227638",
    longitude: "2.213749",
  },
  {
    name: "Georgia",
    isoCode: "ge",
    fifaRank: "117",
    nationsLeagueGroup: "B1",
    qualGroup: "E",
    nationsLeaguePosition: 3,
    nlRank: 200,
    latitude: "42.315407",
    longitude: "43.356892",
  },
  {
    name: "Germany",
    isoCode: "de",
    fifaRank: "11",
    nationsLeagueGroup: "A3",
    qualGroup: "A",
    nationsLeaguePosition: 1,
    nlRank: 2,
    latitude: "51.165691",
    longitude: "10.451526",
  },
  {
    name: "Greece",
    isoCode: "gr",
    fifaRank: "47",
    nationsLeagueGroup: "B2",
    qualGroup: "C",
    nationsLeaguePosition: 2,
    nlRank: 200,
    latitude: "39.074208",
    longitude: "21.824312",
  },
  {
    name: "Hungary",
    isoCode: "hu",
    fifaRank: "40",
    nationsLeagueGroup: "A3",
    qualGroup: "F",
    nationsLeaguePosition: 3,
    nlRank: 25,
    latitude: "47.162491",
    longitude: "19.503304",
  },
  {
    name: "Iceland",
    isoCode: "is",
    fifaRank: "61",
    nationsLeagueGroup: "B4",
    qualGroup: "D",
    nationsLeaguePosition: 3,
    nlRank: 200,
    latitude: "64.963051",
    longitude: "-17.020835",
  },
  {
    name: "Ireland",
    isoCode: "ie",
    fifaRank: "49",
    nationsLeagueGroup: "B2",
    qualGroup: "F",
    nationsLeaguePosition: 3,
    nlRank: 200,
    latitude: "53.412910",
    longitude: "-8.243890",
  },
  {
    name: "Italy",
    isoCode: "it",
    fifaRank: "6",
    nationsLeagueGroup: "A2",
    qualGroup: "I",
    nationsLeaguePosition: 2,
    nlRank: 16,
    latitude: "41.871941",
    longitude: "12.567380",
  },
  {
    name: "Israel",
    isoCode: "il",
    fifaRank: "114",
    nationsLeagueGroup: "A2",
    qualGroup: "I",
    nationsLeaguePosition: 4,
    nlRank: 200,
    latitude: "31.046051",
    longitude: "34.851612",
  },
  {
    name: "Kazakhstan",
    isoCode: "kz",
    fifaRank: "103",
    nationsLeagueGroup: "B3",
    qualGroup: "J",
    nationsLeaguePosition: 4,
    nlRank: 200,
    latitude: "48.019589",
    longitude: "54.923684",
  },
  {
    name: "Kosovo",
    isoCode: "xk",
    fifaRank: "107",
    nationsLeagueGroup: "C2",
    qualGroup: "B",
    nationsLeaguePosition: 2,
    nlRank: 200,
    latitude: "42.602636",
    longitude: "20.902981",
  },
  {
    name: "Latvia",
    isoCode: "lv",
    fifaRank: "135",
    nationsLeagueGroup: "C4",
    qualGroup: "K",
    nationsLeaguePosition: 4,
    nlRank: 200,
    latitude: "56.949646",
    longitude: "24.105186",
  },
  {
    name: "Liechtenstein",
    isoCode: "li",
    fifaRank: "192",
    nationsLeagueGroup: "D1",
    qualGroup: "J",
    nationsLeaguePosition: 3,
    nlRank: 200,
    latitude: "47.166000",
    longitude: "9.555373",
  },
  {
    name: "Lithuania",
    isoCode: "lt",
    fifaRank: "113",
    nationsLeagueGroup: "C2",
    qualGroup: "G",
    nationsLeaguePosition: 4,
    nlRank: 200,
    latitude: "54.689652",
    longitude: "25.279959",
  },

  {
    name: "Luxembourg",
    isoCode: "lu",
    fifaRank: "96",
    nationsLeagueGroup: "C3",
    qualGroup: "A",
    nationsLeaguePosition: 4,
    nlRank: 200,
    latitude: "49.815273",
    longitude: "6.129583",
  },
  {
    name: "Malta",
    isoCode: "mt",
    fifaRank: "174",
    nationsLeagueGroup: "D2",
    qualGroup: "G",
    nationsLeaguePosition: 2,
    nlRank: 200,
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
    nlRank: 14,
    latitude: "47.411653",
    longitude: "28.833887",
  },
  {
    name: "Montenegro",
    isoCode: "me",
    fifaRank: "73",
    nationsLeagueGroup: "B4",
    qualGroup: "L",
    nationsLeaguePosition: 4,
    nlRank: 200,
    latitude: "42.506389",
    longitude: "19.408850",
  },
  {
    name: "Netherlands",
    isoCode: "nl",
    fifaRank: "10",
    nationsLeagueGroup: "A3",
    qualGroup: "G",
    nationsLeaguePosition: 2,
    nlRank: 17,
    latitude: "52.132633",
    longitude: "5.291266",
  },
  {
    name: "Northern Ireland",
    isoCode: "gb-nir",
    fifaRank: "59", // As of November 2023
    nationsLeagueGroup: "C3",
    qualGroup: "A",
    nationsLeaguePosition: 1,
    nlRank: 13,
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
    nlRank: 12,
    latitude: "41.608635",
    longitude: "21.745275",
  },
  {
    name: "Norway",
    isoCode: "no",
    fifaRank: "48",
    nationsLeagueGroup: "B3",
    qualGroup: "I",
    nationsLeaguePosition: 1,
    nlRank: 6,
    latitude: "59.91129366297636",
    longitude: "10.753603061457929",
  },
  {
    name: "Poland",
    isoCode: "pl",
    fifaRank: "15",
    nationsLeagueGroup: "A1",
    qualGroup: "G",
    nationsLeaguePosition: 4,
    nlRank: 200,
    latitude: "51.919438",
    longitude: "19.145136",
  },
  {
    name: "Portugal",
    isoCode: "pt",
    fifaRank: "9",
    nationsLeagueGroup: "A1",
    qualGroup: "C",
    nationsLeaguePosition: 1,
    nlRank: 3,
    latitude: "39.399872",
    longitude: "-8.224454",
  },
  {
    name: "Romania",
    isoCode: "ro",
    fifaRank: "46",
    nationsLeagueGroup: "C2",
    qualGroup: "H",
    nationsLeaguePosition: 1,
    nlRank: 9,
    latitude: "45.943161",
    longitude: "24.966760",
  },
  {
    name: "San Marino",
    isoCode: "sm",
    fifaRank: "211",
    nationsLeagueGroup: "D1",
    qualGroup: "H",
    nationsLeaguePosition: 1,
    nlRank: 15,
    latitude: "43.942360",
    longitude: "12.457777",
  },
  {
    name: "Scotland",
    isoCode: "gb-sct",
    fifaRank: "38", // As of November 2023
    nationsLeagueGroup: "A1",
    qualGroup: "C",
    nationsLeaguePosition: 3,
    nlRank: 21,
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
    nlRank: 22,
    latitude: "44.016521",
    longitude: "21.005859",
  },
  {
    name: "Slovakia",
    isoCode: "sk",
    fifaRank: "53",
    nationsLeagueGroup: "C1",
    qualGroup: "A",
    nationsLeaguePosition: 2,
    nlRank: 200,
    latitude: "48.669026",
    longitude: "19.699024",
  },
  {
    name: "Slovenia",
    isoCode: "si",
    fifaRank: "64",
    nationsLeagueGroup: "B3",
    qualGroup: "B",
    nationsLeaguePosition: 3,
    nlRank: 200,
    latitude: "46.151241",
    longitude: "14.995463",
  },
  {
    name: "Spain",
    isoCode: "es",
    fifaRank: "8",
    nationsLeagueGroup: "A4",
    qualGroup: "E",
    nationsLeaguePosition: 1,
    nlRank: 1,
    latitude: "40.463667",
    longitude: "-3.749220",
  },
  {
    name: "Sweden",
    isoCode: "se",
    fifaRank: "20",
    nationsLeagueGroup: "C1",
    qualGroup: "B",
    nationsLeaguePosition: 1,
    nlRank: 10,
    latitude: "60.128161",
    longitude: "18.643501",
  },
  {
    name: "Switzerland",
    isoCode: "ch",
    fifaRank: "16",
    nationsLeagueGroup: "A4",
    qualGroup: "B",
    nationsLeaguePosition: 4,
    nlRank: 200,
    latitude: "46.818188",
    longitude: "8.227512",
  },
  {
    name: "Turkey",
    isoCode: "tr",
    fifaRank: "39",
    nationsLeagueGroup: "B4",
    qualGroup: "E",
    nationsLeaguePosition: 2,
    nlRank: 200,
    latitude: "38.963745",
    longitude: "35.243322",
  },
  {
    name: "Ukraine",
    isoCode: "ua",
    fifaRank: "27",
    nationsLeagueGroup: "B1",
    qualGroup: "D",
    nationsLeaguePosition: 2,
    nlRank: 200,
    latitude: "49.838268",
    longitude: "31.165580",
  },
  {
    name: "Wales",
    isoCode: "gb-wls",
    fifaRank: "28",
    nationsLeagueGroup: "B4",
    qualGroup: "J",
    nationsLeaguePosition: 1,
    nlRank: 7,
    latitude: "52.130858",
    longitude: "-3.988022",
  },
  {
    name: "Gibraltar",
    isoCode: "gi",
    fifaRank: "194",
    nationsLeagueGroup: "D1",
    qualGroup: "L",
    nationsLeaguePosition: 2,
    nlRank: 200,
    latitude: "36.140740",
    longitude: "-5.351330",
  },
];
const circles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// GLOBAL DATA
var data = [];
var circleData = [];
var textData = [];
var qualified = [];
var secondPlacers = [];
var playoffs = [];
var playoffFinalistsData = []; // Store finalists from step 13 to use in step 14
var playoffWinners = []; // Store winners from step 14 to use in step 15

//HELPERS
var minLat = countries.reduce(
  (min, country) => Math.min(min, country.latitude),
  200
);
var maxLat = countries.reduce(
  (max, country) => Math.max(max, country.latitude),
  -200
);
var minLong = countries.reduce(
  (min, country) => Math.min(min, country.longitude),
  200
);
var maxLong = countries.reduce(
  (max, country) => Math.max(max, country.longitude),
  -200
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
    .data(data, (d) => d.isoCode)
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
      (update) => update,

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
    .select("#circles-group")
    .selectAll("circle")
    .data(circleData)
    .join(
      (enter) =>
        enter
          .append("circle")
          .attr("r", flagSize / 2)
          .attr("cx", svgWidth / 12)
          .attr("cy", (d, i) => yPadding + (svgHeight / 18) * i)
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
    .attr("cx", svgWidth / 12)
    .attr("cy", (d, i) => yPadding + (svgHeight / 18) * i)
    .attr("r", (d) => flagSize / 2)
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
          .style("font-size", flagSize + "px"),
      (update) => update.text((d) => d.text).style("opacity", 0.85),
      (exit) =>
        exit
          .transition()
          .duration(duration * 2)
          .style("opacity", 0)
          .remove()
    )
    .transition()
    .duration(400)
    .delay((d) => d.delay || 0)
    .attr("x", (d) => d.x)
    .attr("y", (d) => d.y)
    .style("opacity", 0.85)
    .style("font-size", flagSize + "px");
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
    x: country.x(),
    y: country.y(),
    size: bigFlagSize,
  }));
  circleData = [];
  redraw();
}

function step1() {
  data = hosts.map((c) => ({
    isoCode: c.isoCode,
    x: -svgWidth,
    y: svgHeight / 2,
    size: 2 * flagSize,
    opacity: 0,
  }));

  data = data.concat(
    countries.map((c) => ({
      isoCode: c.isoCode,
      x: svgWidth * 2,
      y: svgHeight / 2,
      size: flagSize,
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
    x: d3.scaleLinear(
      [minLong, maxLong],
      [0 + 2 * xPadding, svgWidth - 2 * xPadding]
    )(c.longitude),
    y: d3.scaleLinear(
      [minLat, maxLat],
      [svgHeight - 4 * yPadding, 0 + 4 * yPadding]
    )(c.latitude),
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
    return svgWidth / 4 - xPadding;
  }
  if (groupNumber % 3 == 1) {
    return (2 * svgWidth) / 4 - xPadding;
  }
  if (groupNumber % 3 == 2) {
    return (3 * svgWidth) / 4 - xPadding;
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

// 5
function sortQualGroups() {
  console.log("sortQualGroups");
  data = [];
  const qualGroups = groupBy(countries, "qualGroup");
  Object.keys(qualGroups)
    .sort()
    .map((key, i) => {
      // No sorting here - we're just showing the groups
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
      x: getQualX(i) + 0.2 * flagSize,
      y: getQualYforHeader(i + 1),
    }));
  redraw();
}

// 6
function playQualGroups() {
  qualified = [];
  secondPlacers = [];
  console.log("playQualGroups");
  data = [];
  circleData = [];
  const qualGroups = groupBy(countries, "qualGroup");
  Object.keys(qualGroups)
    .sort()
    .map((key, i) => {
      qualGroups[key]
        .sort((c1, c2) =>
          c1.qualPosition !== undefined
            ? c1.qualPosition - c2.qualPosition
            : c1.fifaRank - c2.fifaRank
        )
        .map((c, j) => {
          if (j == 0) {
            // add group winners
            qualified.push(c);
          }
          if (j == 1) {
            // add group winners
            secondPlacers.push(c);
          }
          return data.push({
            isoCode: c.isoCode,
            x: getQualX(i),
            y: getQualY(i + 1, j),
            size: flagSize,
            opacity: 1,
            delay: 100 + i * 80,
            qualified: j == 0,
            secondPlace: j == 1,
            groupIndex: i,
          });
        });
    });
  textData = Object.keys(qualGroups)
    .sort()
    .map((key, i) => ({
      text: key,
      x: getQualX(i) + 0.2 * flagSize,
      y: getQualYforHeader(i + 1),
    }));
  redraw();
}

// 7
function showQualWinners() {
  console.log("showQualWinners");
  data = [];
  const qualGroups = groupBy(countries, "qualGroup");
  Object.keys(qualGroups)
    .sort()
    .map((key, i) => {
      qualGroups[key]
        .sort((c1, c2) =>
          c1.qualPosition !== undefined
            ? c1.qualPosition - c2.qualPosition
            : c1.fifaRank - c2.fifaRank
        )
        .map((c, j) =>
          data.push({
            isoCode: c.isoCode,
            x: getQualX(i),
            y: getQualY(i + 1, j),
            size: flagSize,
            opacity: 1,
            delay: 100 + i * 80,
            qualified: j == 0,
            secondPlace: j == 1,
            groupIndex: i,
          })
        );
    });
  data.forEach((c) => {
    if (c.qualified) {
      c.x = svgWidth / 12 - flagSize / 2;
      c.y = yPadding + (svgHeight / 18) * c.groupIndex - flagSize / 2;
      c.delay = 400 + 200 * c.groupIndex;
    }
  });
  circleData = circles;
  textData = Object.keys(qualGroups)
    .sort()
    .map((key, i) => ({
      text: key,
      x: getQualX(i) + 0.2 * flagSize,
      y: getQualYforHeader(i + 1),
    }));

  redraw();
}

// 8
function ShowSecondPlacers() {
  data = [];
  const qualGroups = groupBy(countries, "qualGroup");
  Object.keys(qualGroups)
    .sort()
    .map((key, i) => {
      qualGroups[key]
        .sort((c1, c2) =>
          c1.qualPosition !== undefined
            ? c1.qualPosition - c2.qualPosition
            : c1.fifaRank - c2.fifaRank
        )
        .map((c, j) =>
          data.push({
            isoCode: c.isoCode,
            x: getQualX(i),
            y: getQualY(i + 1, j),
            size: flagSize,
            opacity: 1,
            delay: 100 + i * 80,
            qualified: j == 0,
            secondPlace: j == 1,
            groupIndex: i,
          })
        );
    });
  data.forEach((c) => {
    if (c.qualified) {
      c.x = svgWidth / 12 - flagSize / 2;
      c.y = yPadding + (svgHeight / 18) * c.groupIndex - flagSize / 2;
      c.delay = 400 + 200 * c.groupIndex;
    } else if (c.secondPlace) {
      c.x = svgWidth - svgWidth / 12 - flagSize / 2;
      c.y = yPadding + (svgHeight / 18) * c.groupIndex - flagSize / 2;
      c.delay = 100 * c.groupIndex;
    } else if (!c.qualified) {
      c.opacity = 0;
      c.delay = 2000 + 40 * c.groupIndex;
    }
  });
  circleData = circles;
  textData = [];

  redraw();
}
// 9
function ShowNL() {
  data = [];

  // Use our already determined qualified and secondPlacers arrays
  // which were populated based on qualPosition in playQualGroups

  const nationsLeagueGroups = groupBy(countries, "nationsLeagueGroup");
  Object.keys(nationsLeagueGroups).map((key, i) => {
    nationsLeagueGroups[key].map((c) => {
      if (qualified.some((q) => q.isoCode == c.isoCode)) {
        // This country qualified directly
        data.push({
          isoCode: c.isoCode,
          x: svgWidth / 12 - flagSize / 2,
          y: yPadding + (svgHeight / 18) * qualified.indexOf(c) - flagSize / 2,
          size: flagSize,
          opacity: 1,
          delay: 100 + i * 40,
        });
      } else if (secondPlacers.some((q) => q.isoCode == c.isoCode)) {
        // This country is a runner-up
        data.push({
          isoCode: c.isoCode,
          x: svgWidth - svgWidth / 12,
          y:
            yPadding +
            (svgHeight / 18) * secondPlacers.indexOf(c) -
            flagSize / 2,
          size: flagSize,
          opacity: 1,
          delay: 100 + i * 40,
        });
      } else {
        // This country did not qualify directly and is not a runner-up
        data.push({
          isoCode: c.isoCode,
          x: getNlX(key),
          y: getNlY(key, c.nationsLeaguePosition - 1),
          size: flagSize,
          opacity: 1,
          delay: 100 + i * 80,
        });
      }
    });
  });
  textData = Object.keys(nationsLeagueGroups).map((key) => ({
    text: key,
    x: getNlX(key) - flagSize / 7,
    y: getYforHeader(key),
  }));

  redraw();
}
// 10
function LastPlayoffSpots() {
  data = [];
  playoffs = [];

  // Define top4 Nations League teams that didn't qualify directly
  var top4 = countries
    .filter(
      (c) =>
        !qualified.some((q) => q.isoCode == c.isoCode) &
        !secondPlacers.some((q) => q.isoCode == c.isoCode)
    )
    .sort((a, b) => a.nlRank - b.nlRank)
    .slice(0, 4);

  // Use secondPlacers which is already based on qualPosition
  playoffs = [...secondPlacers]
    .sort((a, b) => a.fifaRank - b.fifaRank)
    .concat(top4);

  const nationsLeagueGroups = groupBy(countries, "nationsLeagueGroup");
  Object.keys(nationsLeagueGroups).map((key, i) => {
    nationsLeagueGroups[key].map((c) => {
      if (qualified.some((q) => q.isoCode == c.isoCode)) {
        data.push({
          isoCode: c.isoCode,
          x: svgWidth / 12 - flagSize / 2,
          y: yPadding + (svgHeight / 18) * qualified.indexOf(c) - flagSize / 2,
          size: flagSize,
          opacity: 1,
          delay: 100 + i * 40,
        });
      } else if (secondPlacers.some((q) => q.isoCode == c.isoCode)) {
        data.push({
          isoCode: c.isoCode,
          x: svgWidth - svgWidth / 12,
          y:
            yPadding +
            (svgHeight / 18) * secondPlacers.indexOf(c) -
            flagSize / 2,
          size: flagSize,
          opacity: 1,
          delay: 100 + i * 40,
        });
      } else {
        data.push({
          isoCode: c.isoCode,
          x: getNlX(key),
          y: getNlY(key, c.nationsLeaguePosition - 1),
          size: flagSize,
          opacity: top4.some((t) => t.isoCode == c.isoCode) ? 1 : 0.1,
          delay: 100 + i * 20,
        });
      }
    });
  });
  textData = Object.keys(nationsLeagueGroups).map((key) => ({
    text: key,
    x: getNlX(key) - flagSize / 7,
    y: getYforHeader(key),
  }));

  redraw();
}

// 11
function playoffs1() {
  data = [];

  const nationsLeagueGroups = groupBy(countries, "nationsLeagueGroup");
  Object.keys(nationsLeagueGroups).map((key, i) => {
    nationsLeagueGroups[key].map((c) => {
      if (qualified.some((q) => q.isoCode == c.isoCode)) {
        data.push({
          isoCode: c.isoCode,
          x: svgWidth / 12 - flagSize / 2,
          y: yPadding + (svgHeight / 18) * qualified.indexOf(c) - flagSize / 2,
          size: flagSize,
          opacity: 1,
          delay: 100 + i * 40,
        });
      } else if (playoffs.some((q) => q.isoCode == c.isoCode)) {
        data.push({
          isoCode: c.isoCode,
          x: svgWidth - svgWidth / 12,
          y: yPadding + (svgHeight / 18) * playoffs.indexOf(c) - flagSize / 2,
          size: flagSize,
          opacity: 1,
          delay: 100 + i * 40,
        });
      }
    });
  });
  textData = ["Pot 1", "Pot 2", "Pot 3", "Pot 4"].map((key, i) => ({
    text: key,
    x: (3 / 4) * svgWidth,
    y: ((svgHeight - 2 * yPadding) * (i + 1)) / 4 - 3 * flagSize,
  }));

  redraw();
}

// 12
function playoffMatches() {
  console.log("playoffMatches");
  data = [];
  textData = [];

  // Create copies of the playoffs array for each pot
  // Playoff teams should already be sorted by FIFA rank from the previous step
  if (playoffs.length >= 16) {
    const pot1 = playoffs.slice(0, 4);
    const pot2 = playoffs.slice(4, 8);
    const pot3 = playoffs.slice(8, 12);
    const pot4 = playoffs.slice(12, 16);

    // Show qualified teams on the left side
    qualified.forEach((team, index) => {
      data.push({
        isoCode: team.isoCode,
        x: svgWidth / 12 - flagSize / 2,
        y: yPadding + (svgHeight / 18) * index - flagSize / 2,
        size: flagSize,
        opacity: 1,
        delay: 50 * index,
      });
    });

    // Matchup 1: Pot 1 vs Pot 4 (top half of screen)
    for (let i = 0; i < Math.min(pot1.length, pot4.length); i++) {
      // Pot 1 team
      data.push({
        isoCode: pot1[i].isoCode,
        x: svgWidth / 3 - flagSize * 1.5,
        y: (svgHeight / 5) * (i + 1) - flagSize / 2,
        size: flagSize,
        opacity: 1,
        delay: 500 + 50 * i,
      });

      // Pot 4 team
      data.push({
        isoCode: pot4[i].isoCode,
        x: svgWidth / 3 + flagSize * 1.5,
        y: (svgHeight / 5) * (i + 1) - flagSize / 2,
        size: flagSize,
        opacity: 1,
        delay: 1000 + 50 * i,
      });

      // Add "vs" text between teams
      textData.push({
        text: "vs",
        x: svgWidth / 3,
        y: (svgHeight / 5) * (i + 1) + flagSize * 0.25,
      });
    }

    // Matchup 2: Pot 2 vs Pot 3 (bottom half of screen)
    for (let i = 0; i < Math.min(pot2.length, pot3.length); i++) {
      // Pot 2 team
      data.push({
        isoCode: pot2[i].isoCode,
        x: (2 * svgWidth) / 3 - flagSize * 1.5,
        y: (svgHeight / 5) * (i + 1) - flagSize / 2,
        size: flagSize,
        opacity: 1,
        delay: 1500 + 50 * i,
      });

      // Pot 3 team
      data.push({
        isoCode: pot3[i].isoCode,
        x: (2 * svgWidth) / 3 + flagSize * 1.5,
        y: (svgHeight / 5) * (i + 1) - flagSize / 2,
        size: flagSize,
        opacity: 1,
        delay: 2000 + 50 * i,
      });

      // Add "vs" text between teams
      textData.push({
        text: "vs",
        x: (2 * svgWidth) / 3,
        y: (svgHeight / 5) * (i + 1) + flagSize * 0.25,
      });
    }

    // Add section labels
    textData.push({
      text: "Pot 1 vs Pot 4",
      x: svgWidth / 3 - flagSize * 2,
      y: svgHeight / 10 - flagSize,
    });

    textData.push({
      text: "Pot 2 vs Pot 3",
      x: (2 * svgWidth) / 3 - flagSize * 2,
      y: svgHeight / 10 - flagSize,
    });
  }

  redraw();
}

// 13
function playoffFinalists() {
  console.log("playoffFinalists");
  data = [];
  textData = [];
  playoffFinalistsData = []; // Reset finalists data

  // Create copies of the playoffs array for each pot
  if (playoffs.length >= 16) {
    const pot1 = playoffs.slice(0, 4);
    const pot2 = playoffs.slice(4, 8);
    const pot3 = playoffs.slice(8, 12);
    const pot4 = playoffs.slice(12, 16);

    // Show qualified teams on the left side
    qualified.forEach((team, index) => {
      data.push({
        isoCode: team.isoCode,
        x: svgWidth / 12 - flagSize / 2,
        y: yPadding + (svgHeight / 18) * index - flagSize / 2,
        size: flagSize,
        opacity: 1,
        delay: 50 * index,
      });
    });

    // For each matchup, determine winners based on FIFA rank
    let winners = [];

    // Process Pot 1 vs Pot 4 matchups
    for (let i = 0; i < Math.min(pot1.length, pot4.length); i++) {
      // Determine winner (60% chance for pot1 to win)
      const pot1Wins = Math.random() < 0.6;
      const winner = pot1Wins ? pot1[i] : pot4[i];
      winners.push(winner);

      // Store the matchup result for use in step 14
      playoffFinalistsData.push({
        left: pot1[i],
        right: pot4[i],
        leftWins: pot1Wins,
        index: i,
      });

      // Calculate the final position with more vertical spacing
      // Move teams up by one flag height
      const finalPositionY = (svgHeight / 5) * (i + 1) - flagSize * 2;

      // Add pot1 team (winner or loser)
      data.push({
        isoCode: pot1[i].isoCode,
        x: svgWidth / 3 - flagSize * 1.5,
        y: (svgHeight / 5) * (i + 1) - flagSize / 2,
        size: flagSize,
        opacity: pot1Wins ? 1 : 0.2,
        delay: 200,
        winnerDestX: pot1Wins ? svgWidth / 2 - flagSize * 1.5 : null,
        winnerDestY: pot1Wins ? finalPositionY : null,
        isWinner: pot1Wins,
      });

      // Add pot4 team (winner or loser)
      data.push({
        isoCode: pot4[i].isoCode,
        x: svgWidth / 3 + flagSize * 1.5,
        y: (svgHeight / 5) * (i + 1) - flagSize / 2,
        size: flagSize,
        opacity: pot1Wins ? 0.2 : 1,
        delay: 200,
        winnerDestX: pot1Wins ? null : svgWidth / 2 - flagSize * 1.5,
        winnerDestY: pot1Wins ? null : finalPositionY,
        isWinner: !pot1Wins,
      });
    }

    // Process Pot 2 vs Pot 3 matchups
    for (let i = 0; i < Math.min(pot2.length, pot3.length); i++) {
      // Determine winner (70% chance for pot2 to win)
      const pot2Wins = Math.random() < 0.7;
      const winner = pot2Wins ? pot2[i] : pot3[i];
      winners.push(winner);

      // Store the matchup result for use in step 14
      playoffFinalistsData.push({
        left: pot2[i],
        right: pot3[i],
        leftWins: pot2Wins,
        index: i + 4,
      });

      // Calculate the final position with more vertical spacing
      // Move teams up by one flag height
      const finalPositionY = (svgHeight / 5) * (i + 1) - flagSize * 2;

      // Add pot2 team (winner or loser)
      data.push({
        isoCode: pot2[i].isoCode,
        x: (2 * svgWidth) / 3 - flagSize * 1.5,
        y: (svgHeight / 5) * (i + 1) - flagSize / 2,
        size: flagSize,
        opacity: pot2Wins ? 1 : 0.2,
        delay: 200,
        winnerDestX: pot2Wins ? svgWidth / 2 + flagSize * 1.5 : null,
        winnerDestY: pot2Wins ? finalPositionY : null,
        isWinner: pot2Wins,
      });

      // Add pot3 team (winner or loser)
      data.push({
        isoCode: pot3[i].isoCode,
        x: (2 * svgWidth) / 3 + flagSize * 1.5,
        y: (svgHeight / 5) * (i + 1) - flagSize / 2,
        size: flagSize,
        opacity: pot2Wins ? 0.2 : 1,
        delay: 200,
        winnerDestX: pot2Wins ? null : svgWidth / 2 + flagSize * 1.5,
        winnerDestY: pot2Wins ? null : finalPositionY,
        isWinner: !pot2Wins,
      });
    }

    // Add "vs" text for the finals - adjust to match new positions
    for (let i = 0; i < 4; i++) {
      textData.push({
        text: "vs",
        x: svgWidth / 2,
        y: (svgHeight / 5) * (i + 1) - flagSize * 1.2,
        delay: 1000,
      });
    }

    textData.push({
      text: "Playoff Finals",
      x: svgWidth / 2 - flagSize * 2,
      y: svgHeight / 14,
      delay: 0,
    });

    // Apply second stage of animation: move winners to center
    setTimeout(() => {
      data.forEach((team) => {
        if (team.isWinner && team.winnerDestX !== null) {
          team.x = team.winnerDestX;
          team.y = team.winnerDestY;
          team.delay = 0;
        }
      });
      redraw();
    }, 1500);
  }

  redraw();
}

// 14
function finalQualifiers() {
  console.log("finalQualifiers");
  data = [];
  textData = [];
  playoffWinners = []; // Reset winners array

  // Show already qualified teams on the left side
  qualified.forEach((team, index) => {
    data.push({
      isoCode: team.isoCode,
      x: svgWidth / 12 - flagSize / 2,
      y: yPadding + (svgHeight / 18) * index - flagSize / 2,
      size: flagSize,
      opacity: 1,
      delay: 0,
    });
  });

  // Use playoff finalists determined in the previous step
  if (playoffFinalistsData.length >= 8) {
    // Determine final matchups using the stored semifinal results
    let finalMatchups = [];

    for (let i = 0; i < 4; i++) {
      const leftMatchup = playoffFinalistsData[i];
      const rightMatchup = playoffFinalistsData[i + 4];

      // Determine left finalist
      const leftFinalist = leftMatchup.leftWins
        ? leftMatchup.left
        : leftMatchup.right;

      // Determine right finalist
      const rightFinalist = rightMatchup.leftWins
        ? rightMatchup.left
        : rightMatchup.right;

      // Better FIFA rank gives advantage (65% chance)
      const leftRank = parseInt(leftFinalist.fifaRank);
      const rightRank = parseInt(rightFinalist.fifaRank);
      const leftWins =
        leftRank < rightRank ? Math.random() < 0.65 : Math.random() < 0.35;

      // Determine the final winner
      const winner = leftWins ? leftFinalist : rightFinalist;
      playoffWinners.push(winner);

      finalMatchups.push({
        left: leftFinalist,
        right: rightFinalist,
        leftWins: leftWins,
      });
    }

    // Show final matchups (loser faded, winner highlighted) initially
    for (let i = 0; i < finalMatchups.length; i++) {
      const matchup = finalMatchups[i];
      const yPos = (svgHeight / 5) * (i + 1) - flagSize * 2;

      // Add winner flag only
      if (matchup.leftWins) {
        // Left finalist wins
        data.push({
          isoCode: matchup.left.isoCode,
          x: svgWidth / 2 - flagSize * 1.5,
          y: yPos,
          size: flagSize,
          opacity: 1,
          delay: 0,
          isWinner: true,
          index: i,
        });
      } else {
        // Right finalist wins
        data.push({
          isoCode: matchup.right.isoCode,
          x: svgWidth / 2 + flagSize * 1.5,
          y: yPos,
          size: flagSize,
          opacity: 1,
          delay: 0,
          isWinner: true,
          index: i,
        });
      }
    }

    // After a short delay, move winners to join qualified teams
    setTimeout(() => {
      // Only keep winners and qualified teams
      const newData = [];

      // Keep qualified teams
      qualified.forEach((team, index) => {
        newData.push({
          isoCode: team.isoCode,
          x: svgWidth / 12 - flagSize / 2,
          y: yPadding + (svgHeight / 18) * index - flagSize / 2,
          size: flagSize,
          opacity: 1,
          delay: 0,
        });
      });

      // Add winners and animate them to join qualified teams
      data.forEach((team, idx) => {
        if (team.isWinner) {
          newData.push({
            isoCode: team.isoCode,
            x: svgWidth / 12 - flagSize / 2,
            y:
              yPadding +
              (svgHeight / 18) * (qualified.length + team.index) -
              flagSize / 2,
            size: flagSize,
            opacity: 1,
            delay: 200 + team.index * 200,
            duration: 1000,
          });
        }
      });

      // Replace data with filtered data
      data = newData;
      textData = []; // Clear all text
      redraw();
    }, 1500);
  }

  redraw();
}

// 15
function finalDisplay() {
  console.log("finalDisplay");
  data = [];
  textData = [];
  // Keep golden tickets visible by using the circles data
  circleData = circles;

  // Show already qualified teams on the left side
  qualified.forEach((team, index) => {
    data.push({
      isoCode: team.isoCode,
      x: svgWidth / 12 - flagSize / 2,
      y: yPadding + (svgHeight / 18) * index - flagSize / 2,
      size: flagSize,
      opacity: 1,
      delay: 0,
    });
  });

  // Use playoff winners determined in step 14
  if (playoffWinners.length === 4) {
    // Add the playoff winners to the display
    playoffWinners.forEach((winner, index) => {
      data.push({
        isoCode: winner.isoCode,
        x: svgWidth / 12 - flagSize / 2,
        y:
          yPadding +
          (svgHeight / 18) * (qualified.length + index) -
          flagSize / 2,
        size: flagSize,
        opacity: 1,
        delay: 0,
      });
    });
  }

  redraw();
}

// Functions for handling results reshuffling
function reshuffleResults() {
  console.log("Reshuffling results...");

  // Add animation to the button
  const button = document.getElementById("play-again-button");
  if (button) {
    button.classList.add("button-clicked");
    setTimeout(() => {
      button.classList.remove("button-clicked");
    }, 300);
  }

  // Reset qualified and second placers
  qualified = [];
  secondPlacers = [];

  // Group countries by qualification group
  const qualGroups = groupBy(countries, "qualGroup");

  // First assign a default qualPosition to all countries (reset previous shuffles)
  countries.forEach((country) => {
    country.qualPosition = 999; // Default high position
  });

  // Process each qualification group
  Object.keys(qualGroups)
    .sort()
    .forEach((groupKey) => {
      const group = qualGroups[groupKey];

      // Create a copy of the group for shuffling
      const shuffledGroup = [...group];

      // Randomize results with FIFA rank weighting
      shuffleWithFifaWeighting(shuffledGroup);

      // Store the final positions in the original country objects
      shuffledGroup.forEach((country, index) => {
        // Find the original country object and update its qualPosition
        const originalCountry = countries.find(
          (c) => c.isoCode === country.isoCode
        );
        if (originalCountry) {
          originalCountry.qualPosition = index; // 0 = winner, 1 = runner-up, etc.
        }
      });

      // Use the first country as the winner and second as runner-up
      if (shuffledGroup.length > 0) {
        qualified.push(shuffledGroup[0]);
      }

      if (shuffledGroup.length > 1) {
        secondPlacers.push(shuffledGroup[1]);
      }
    });

  // Re-run the playQualGroups function to update the visualization
  playQualGroups();
}

function shuffleWithFifaWeighting(array) {
  // Sort by FIFA rank (lower is better)
  array.sort((a, b) => a.fifaRank - b.fifaRank);

  // Apply randomization with weighting based on FIFA rank
  // Teams with better FIFA rankings have higher chances of winning
  for (let i = 0; i < array.length; i++) {
    const fifaRank = parseInt(array[i].fifaRank);

    // Create a more decisive weighting for FIFA rank
    // Using an exponential function to increase the advantage for top-ranked teams
    // The power of 2 makes the weighting curve steeper
    const baseWeight = (1000 - fifaRank) / 1000;
    const weight = Math.pow(baseWeight, 2.5);

    // Add a rank-based bonus for top 20 teams to make them even more likely to win
    const topTeamBonus = fifaRank <= 20 ? 0.3 : 0;

    // Generate a random value with stronger influence from FIFA rank
    // The multiplier is higher (3 instead of 2) to increase variance
    const randomValue = Math.random() * weight * 3 + topTeamBonus;

    // Assign this value to the team
    array[i].randomValue = randomValue;
  }

  // Sort by the randomized values (higher is better)
  array.sort((a, b) => b.randomValue - a.randomValue);
}

// Handle step enter (add reshuffleResults to the global scope)
window.reshuffleResults = reshuffleResults;

// scrollama event handlers
function handleStepEnter(response) {
  // add color to current step only
  step.classed("is-active", function (d, i) {
    return i === response.index;
  });

  console.log("Enter step ", response.index, " - dir: " + response.direction);

  // Update the content for this step based on current language
  if (window.updateContent) {
    window.updateContent(response.index);
  }

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
    case 6:
      playQualGroups();
      break;
    case 7:
      showQualWinners();
      break;
    case 8:
      ShowSecondPlacers();
      break;
    case 9:
      ShowNL();
      break;
    case 10:
      LastPlayoffSpots();
      break;
    case 11:
      playoffs1();
      break;
    case 12:
      playoffMatches();
      break;
    case 13:
      playoffFinalists();
      break;
    case 14:
      finalQualifiers();
      break;
    case 15:
      finalDisplay();
      break;
  }
}

// generic window resize listener event
function handleResize(init) {
  console.log("resizing..");
  console.log();
  var isDesktop = window.innerWidth > 600;

  if (!isDesktop && !init) return;

  // 1. update height of step elements
  var stepH = Math.floor(window.innerHeight * 1.3);
  step.style("height", stepH + "px");

  var figureHeight = window.innerHeight;
  var figureMarginTop = (window.innerHeight - figureHeight) / 2;
  figure = isDesktop ? d3.select("#desktop-fig") : d3.select("#mobile-fig");
  figure
    .style("height", figureHeight + "px")
    .style("top", figureMarginTop + "px");

  svg = isDesktop ? d3.select("#desktop-svg") : d3.select("#mobile-svg");

  svgWidth = parseInt(svg.style("width"));
  xPadding = svgWidth * 0.06;

  if (isDesktop) {
    svg.style("height", figureHeight + "px");
    svgHeight = figureHeight;
    yPadding = svgHeight * 0.06;
    flagSize = svgHeight / 40;
    bigFlagSize = flagSize * 3;
    flagPadding = flagSize / 3;
  }

  // 3. tell scrollama to update new element dimensions
  scroller.resize();
}

function init() {
  // 1. force a resize on load to ensure proper dimensions are sent to scrollama
  handleResize(true);

  addEventListener("resize", () => handleResize());

  // Initialize qualPosition for all countries
  countries.forEach((country) => {
    country.qualPosition = country.fifaRank;
  });

  startScreen();

  // Make reshuffleResults available globally
  window.reshuffleResults = reshuffleResults;

  // Hide scroll indicator when user scrolls past first section
  window.addEventListener("scroll", function () {
    const scrollIndicators = document.querySelectorAll(".scroll-indicator");
    if (window.scrollY > 100) {
      scrollIndicators.forEach((indicator) => {
        indicator.style.opacity = "0";
        // Remove it after fade out animation completes
        setTimeout(() => {
          if (indicator) indicator.style.display = "none";
        }, 300);
      });
    }
  });

  // 2. setup the scroller passing options
  // 		this will also initialize trigger observations
  // 3. bind scrollama event handlers (this can be chained like below)
  // find the halfway point of the initial viewport height
  // (it changes on mobile, but by just using the initial value
  // you remove jumpiness on scroll direction change)
  const midpoint = Math.floor(window.innerHeight * 0.7) + "px";
  scroller
    .setup({
      step: "#scrolly article .step",
      offset: midpoint,
      debug: false,
    })
    .onStepEnter(handleStepEnter);
}

// kick things off
init();
