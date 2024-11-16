import { inspect } from "util";
inspect.defaultOptions.depth = null;
inspect.defaultOptions.maxArrayLength = null;

import { getSynonym } from "../src/vanDale.js";

const testCases = [
  {
    input: ["zitten"],
    expected: [
      {
        word: "zitten",
        synonyms: [
          "neerzitten",
          "zetelen",
          "bevinden",
          "broeden",
          "opzitten",
          "paalzitten",
          "stilzitten",
          "tronen",
          "zich bevinden",
          "steken",
          "verkeren in",
          "zijn",
          "passen",
          "aanraken",
          "frunniken",
          "friemelen",
          "frommelen",
          "frutselen",
          "morrelen",
          "peuteren",
          "wriemelen",
          "iets op zijn lever hebben",
          "in zijn maag zitten met iem./iets",
          "rondlopen met",
          "ervaren",
          "zich bezighouden met",
          "lopen te",
          "zich occuperen met",
          "zich ophouden met",
          "liggen te",
          "besteden",
        ],
      },
    ],
  },
  {
    input: ["o.a."],
    expected: [
      {
        word: "o.a.",
        synonyms: [],
      },
    ],
  },
  {
    input: ["werk"],
    expected: [
      {
        word: "werk",
        synonyms: [
          "arbeid",
          "contractarbeid",
          "corvee",
          "dagtaak",
          "dagwerk",
          "deeltijdarbeid",
          "denkwerk",
          "hoofdwerk",
          "dienst",
          "emplooi",
          "flexwerk",
          "geknoei",
          "gebroddel",
          "gemier",
          "gemodder",
          "gepruts",
          "gemeentewerken",
          "geschoolde arbeid",
          "groepswerk",
          "grondwerk",
          "haastwerk",
          "huiswerk",
          "kantoorwerk",
          "kenniswerk",
          "kinderarbeid",
          "knutselwerk",
          "kruimelwerk",
          "gerommel in de marge",
          "labeur",
          "veldwerk",
          "loondienst",
          "loonarbeid",
          "manjaar",
          "mensjaar",
          "mannenwerk",
          "meerwerk",
          "mensenwerk",
          "metselwerk",
          "monnikenwerk",
          "nachtwerk",
          "nevenactiviteit",
          "nevenwerkzaamheden",
          "onderhoudswerkzaamheden",
          "ongeschoolde arbeid",
          "overwerk",
          "personeelswerk",
          "pionierswerk",
          "politiewerk",
          "precisiewerk",
          "millimeterwerk",
          "peuterwerk",
          "priegelwerk",
          "productiewerk",
          "reddingswerk",
          "routinewerk",
          "schilderwerk",
          "schnabbel",
          "schoolwerk",
          "seizoenarbeid",
          "sisyfusarbeid",
          "slavenarbeid",
          "speurwerk",
          "stukwerk",
          "thuiswerk",
          "uitzendwerk",
          "vakwerk",
          "verstelwerk",
          "voorbereiding",
          "preparatie",
          "vrijwilligerswerk",
          "vrouwenwerk",
          "zwartwerk",
          "sluikwerk",
          "bezigheid",
          "correctiewerk",
          "drukwerk",
          "hand-en-spandiensten",
          "karwei",
          "job",
          "werkje",
          "klus",
          "mandag",
          "project",
          "taak",
          "titanenwerk",
          "betrekking",
          "baan",
          "dienstbetrekking",
          "dienstverband",
          "functie",
          "job",
          "positie",
          "post",
          "werkkring",
          "uitoefening",
          "oeuvre",
          "opus",
          "debuut",
          "dichtwerk",
          "poëzie",
          "drukwerk",
          "film",
          "rolprent",
          "klassieker",
          "classic",
          "een gouwe ouwe",
          "evergreen",
          "knoeiwerk",
          "beunhazerij",
          "broddelwerk",
          "kladwerk",
          "lapwerk",
          "prutswerk",
          "kunstwerk",
          "levenswerk",
          "maakwerk",
          "maatwerk",
          "meesterwerk",
          "muziekstuk",
          "compositie",
          "toonzetting",
          "opname",
          "porno",
          "pornografie",
          "repertoire",
          "tearjerker",
          "tranentrekker",
          "tijdsdocument",
          "toneelstuk",
          "drama",
          "spel",
          "theaterstuk",
          "uitgave",
          "publicatie",
          "werkstuk",
          "zwanenzang",
          "daad",
          "handeling",
          "loopwerk",
          "mechanisme",
          "raderwerk",
        ],
      },
    ],
  },
];

describe.each(testCases)("getSynonym", ({ input, expected }) => {
  test(`should return ${expected} for ${input}`, async () => {
    const result = await getSynonym.apply(null, input);
    console.log(input, result);
    expect(result).toEqual(expected);
  });
});