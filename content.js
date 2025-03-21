// Detect browser preferred language and set to Norwegian if preferred, otherwise English
let currentLang = navigator.languages
  .map((lang) => lang.toLowerCase())
  .some((lang) => lang.startsWith("no") || lang === "nb" || lang === "nn")
  ? "no"
  : "eng";

// Set initial language flag based on detected language
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("language-flag").src =
    currentLang === "no"
      ? "https://hatscripts.github.io/circle-flags/flags/no.svg"
      : "https://hatscripts.github.io/circle-flags/flags/uk.svg";
});

function changeLanguage() {
  if (currentLang == "eng") {
    currentLang = "no";
    document.getElementById("language-flag").src =
      "https://hatscripts.github.io/circle-flags/flags/uk.svg";
  } else if (currentLang == "no") {
    currentLang = "eng";
    document.getElementById("language-flag").src =
      "https://hatscripts.github.io/circle-flags/flags/no.svg";
  }

  // Update all content with the new language if the function exists
  if (window.updateAllContent) {
    window.updateAllContent();
  }
}
const steps = {
  0: {
    eng: {
      p: [
        "⚽️🏆 ",
        "   The 2026 World Cup will be hosted in Canada, USA and Mexico.",
      ],
    },
    no: {
      p: ["⚽️🏆 ", "VM i fotball 2026 arrangeres i Canada, USA og Mexico."],
    },
  },
  1: {
    eng: {
      p: [
        "In Europe, 55 nations will compete for 16 golden tickets across the Atlantic.",
        "The Atlantic Ocean",
      ],
    },
    no: {
      p: [
        "I Europa skal 55 land konkurrere om 16 billetter over Atlanterhavet.",
        "Atlanterhavet",
      ],
    },
  },
  2: {
    eng: {
      p: "Let's head to Europe",
    },
    no: {
      p: "Vi drar til Europa",
    },
  },
  3: {
    eng: {
      h2: "2024 Nations League",
      p: "Europe's competing nations are sorted into 4 Leagues (A-D)",
    },
    no: {
      h2: "2024 Nations League",
      p: "Europas konkurrerende nasjoner deles inn i 4 grupper (A-D)",
    },
  },
  4: {
    eng: {
      h2: "November 2024",
      p: [
        "The Nations League group stage is finished!",
        "We'll get back to the Nations league..",
      ],
    },
    no: {
      h2: "November 2024",
      p: [
        "Gruppespillet i Nations League er avsluttet!🇳🇴",
        "Norge vant gruppen sin, men det har ikke så mye å si. Enda..",
      ],
    },
  },
  5: {
    eng: {
      h2: "December 2024",
      p: [
        "In Zurich, the draws for the European World Cup Qualifiers are held.",
        "This time, we divide Europe into 12 groups of four and five teams.",
      ],
    },
    no: {
      h2: "Desember 2024",
      p: [
        "I Zürich trekkes gruppene til selve VM-kvalifiseringen.",
        "Denne gangen deler vi Europa inn i 12 grupper á fire og fem lag.",
      ],
    },
  },
  6: {
    eng: {
      h2: "November 2025",
      p: "After facing each other twice, we conclude the qualifiers group stage.",
    },
    no: {
      h2: "November 2025",
      p: "Etter å ha møtt hverandre to ganger gjennom 2025, er også dette gruppespillet over.",
    },
  },
  7: {
    eng: {
      p: "The 12 group winners are qualified for the 2026 World Cup 🎉",
    },
    no: {
      p: "De 12 gruppevinnerne er kvalifisert til VM i 2026 🎉",
    },
  },
  8: {
    eng: {
      p: "The 12 runner ups, will join the playoffs for the last 4 european spots in the World Cup.",
    },
    no: {
      p: "De 12 gruppetoerne går til playoff for å kjempe om de siste 4 europeiske plassene i VM.",
    },
  },
  9: {
    eng: {
      h2: "Remember Nations League?",
      p: "An additional 4 entries for the playoffs will be selected from the best 4 group winners from the Nations League, that finished outside top two in their qualifying group.",
    },
    no: {
      h2: "Husker du Nations League?",
      p: "Ytterligere 4 playoffplasser går til de 4 beste gruppevinnerne fra Nations League, som endte utenfor topp to i kvalifiseringsgruppen sin.",
    },
  },
  10: {
    eng: {
      p: "Any nations not highlighted, will not qualify for the World Cup",
    },
    no: {
      p: "Nasjoner som er grået ut, vil ikke kvalifisere seg til VM 🥲",
    },
  },
  11: {
    eng: {
      p: "The qualifier runner ups will be seeded in pot 1-3 by their fifa rank, while the nations from Nations league will not be seeded.",
    },
    no: {
      p: "Gruppetoerne i kvalifiseringen vil bli seedet i pot 1-3 basert på sin FIFA-ranking, mens nasjonene fra Nations League er useedet.",
    },
  },
};
