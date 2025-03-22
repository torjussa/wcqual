// Detect browser preferred language and set to Norwegian, Spanish or English
let currentLang = navigator.languages
  .map((lang) => lang.toLowerCase())
  .some((lang) => lang.startsWith("no") || lang === "nb" || lang === "nn")
  ? "no"
  : navigator.languages
      .map((lang) => lang.toLowerCase())
      .some((lang) => lang.startsWith("es"))
  ? "es"
  : "eng";

// Set initial language flag based on detected language
document.addEventListener("DOMContentLoaded", function () {
  updateLanguageFlag();

  // Set scroll text based on language
  const scrollTextElement = document.getElementById("scroll-text");
  if (scrollTextElement) {
    updateScrollText();
  }
});

// Update language flag based on current language
function updateLanguageFlag() {
  const flagSrc =
    currentLang === "no"
      ? "https://hatscripts.github.io/circle-flags/flags/no.svg"
      : currentLang === "es"
      ? "https://hatscripts.github.io/circle-flags/flags/es.svg"
      : "https://hatscripts.github.io/circle-flags/flags/uk.svg";

  document.getElementById("language-flag").src = flagSrc;
}

// Update scroll text based on current language
function updateScrollText() {
  // Always use English "Scroll" text regardless of language
  const scrollText = "Scroll";

  // Update mobile scroll text
  const scrollTextElement = document.getElementById("scroll-text");
  if (scrollTextElement) {
    scrollTextElement.textContent = scrollText;
  }

  // Update desktop scroll text
  const desktopScrollTextElement = document.getElementById(
    "desktop-scroll-text"
  );
  if (desktopScrollTextElement) {
    desktopScrollTextElement.textContent = scrollText;
  }
}

function changeLanguage() {
  // Cycle through languages: eng -> no -> es -> eng
  if (currentLang === "eng") {
    currentLang = "no";
  } else if (currentLang === "no") {
    currentLang = "es";
  } else if (currentLang === "es") {
    currentLang = "eng";
  }

  // Update language flag
  updateLanguageFlag();

  // Update scroll text
  updateScrollText();

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
    es: {
      p: [
        "⚽️🏆 ",
        "La Copa Mundial 2026 se celebrará en Canadá, Estados Unidos y México.",
      ],
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
    es: {
      p: [
        "En Europa, 55 naciones competirán por 16 boletos dorados para cruzar el Atlántico.",
        "El Océano Atlántico",
      ],
    },
  },
  2: {
    eng: {
      p: "Let's head to Europe! 🌍",
    },
    no: {
      p: "Vi drar til Europa! 🌍",
    },
    es: {
      p: "¡Vamos a Europa! 🌍",
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
    es: {
      h2: "Liga de Naciones 2024",
      p: "Las naciones europeas participantes se clasifican en 4 Ligas (A-D)",
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
      h2: "November 2024 🇳🇴",
      p: [
        "Gruppespillet i Nations League er avsluttet!",
        "Norge vant gruppen sin, men det har ikke så mye å si. Enda..",
      ],
    },
    es: {
      h2: "Noviembre 2024",
      p: [
        "¡La fase de grupos de la Liga de Naciones ha terminado!",
        "Volveremos a la Liga de Naciones más adelante..",
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
    es: {
      h2: "Diciembre 2024",
      p: [
        "En Zúrich, se realizan los sorteos para las Eliminatorias Europeas del Mundial.",
        "Esta vez, dividimos Europa en 12 grupos de cuatro y cinco equipos.",
      ],
    },
  },
  6: {
    eng: {
      h2: "November 2025",
      p: "After facing each other twice, we conclude the qualifiers group stage.",
      button: "Play Again",
    },
    no: {
      h2: "November 2025",
      p: "Etter å ha møtt hverandre to ganger gjennom 2025, er også dette gruppespillet over.",
      button: "Spill igjen",
    },
    es: {
      h2: "Noviembre 2025",
      p: "Después de enfrentarse entre sí dos veces, concluimos la fase de grupos de las eliminatorias.",
      button: "Jugar de nuevo",
    },
  },
  7: {
    eng: {
      p: "The 12 group winners are qualified for the 2026 World Cup 🎉",
    },
    no: {
      p: "De 12 gruppevinnerne er kvalifisert til VM i 2026 🎉",
    },
    es: {
      p: "Los 12 ganadores de grupo están clasificados para el Mundial 2026 🎉",
    },
  },
  8: {
    eng: {
      p: "The 12 runner ups, will join the playoffs for the last 4 european spots in the World Cup.",
    },
    no: {
      p: "De 12 gruppetoerne går til playoff for å kjempe om de siste 4 europeiske plassene i VM.",
    },
    es: {
      p: "Los 12 segundos clasificados participarán en los playoffs por las últimas 4 plazas europeas en el Mundial.",
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
    es: {
      h2: "¿Recuerdas la Liga de Naciones?",
      p: "Se seleccionarán 4 participantes adicionales para los playoffs entre los mejores 4 ganadores de grupo de la Liga de Naciones que quedaron fuera de los dos primeros puestos en su grupo de clasificación.",
    },
  },
  10: {
    eng: {
      p: "Any nations not highlighted, will not qualify for the World Cup",
    },
    no: {
      p: "Nasjoner som er grået ut, vil ikke kvalifisere seg til VM 🥲",
    },
    es: {
      p: "Las naciones que no están resaltadas no se clasificarán para el Mundial 🥲",
    },
  },
  11: {
    eng: {
      p: "The qualifier runner ups will be seeded in pot 1-3 by their fifa rank, while the teams from Nations league will not be seeded.",
    },
    no: {
      p: "Gruppetoerne i kvalifiseringen seedes i puljer 1-3 basert på FIFA-ranking, mens lagene fra Nations League er useedet.",
    },
    es: {
      p: "Los segundos clasificados de las eliminatorias se asignarán a los grupos 1-3 según su ranking FIFA, mientras que las naciones de la Liga de Naciones no serán cabezas de serie.",
    },
  },
  12: {
    eng: {
      h2: "March 2026",
      p: "The top seeds (Pot 1) face teams from Pot 4, while teams from Pot 2 face those from Pot 3 in one-game semifinals.",
    },
    no: {
      h2: "Mars 2026",
      p: "De høyest seedede lagene (Pot 1) møter lag fra Pot 4, mens lag fra Pot 2 møter lag fra Pot 3 i semifinaler over én kamp.",
    },
    es: {
      h2: "Marzo 2026",
      p: "Los equipos con mejor clasificación (grupo 1) se enfrentan a equipos del grupo 4, mientras que los equipos del grupo 2 se enfrentan a los del grupo 3 en semifinales a partido único.",
    },
  },
  13: {
    eng: {
      h2: "Playoff finals",
      p: "The winners of the semifinals advance to the playoff finals, where on game decides who qualifies for the World Cup. ",
    },
    no: {
      h2: "Playoff-finaler",
      p: "Vinnerne fra semifinalene går videre til playoff-finalene, der en kamp avgjør hvem som kvalifiserer til VM. ",
    },
    es: {
      h2: "Finales de Playoffs",
      p: "Los ganadores de las semifinales avanzan a las finales de playoffs, donde una partida decide quién clasifica para el Mundial. ",
    },
  },
  14: {
    eng: {
      h2: "The last 16",
      p: [
        "With the playoff winners decided, all 16 European teams for the 2026 World Cup are now confirmed.",
        "These nations will join the hosts and qualifiers from other confederations, for a total of 48 teams.",
      ],
    },
    no: {
      h2: "De 16 heldige",
      p: [
        "Med playoffen avgjort, er alle 16 europeiske lag for VM 2026 nå bekreftet.",
        "Disse nasjonene vil slutte seg til vertene og lag fra andre verdensdeler, totalt 48 land.",
      ],
    },
    es: {
      h2: "Los ultimos 16",
      p: [
        "Con los ganadores de los playoffs decididos, los 16 equipos europeos para el Mundial 2026 ya están confirmados.",
        "Estas naciones se unirán a los anfitriones y a los clasificados de otras confederaciones en el torneo ampliado de 48 equipos.",
      ],
    },
  },
  15: {
    eng: {
      h2: "Thanks for watching!",
      p: "May your country qualify ⚽️",
    },
    no: {
      h2: "Takk for at du så på!",
      p: "Heia Norge! 🇳🇴⚽️",
    },
    es: {
      h2: "Gracias por ver",
      p: "¡Que tu país clasifique! ⚽️",
    },
  },
};
