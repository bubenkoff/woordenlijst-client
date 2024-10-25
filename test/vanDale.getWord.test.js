import { inspect } from "util";
inspect.defaultOptions.depth = null;
inspect.defaultOptions.maxArrayLength = null;

import { getWord } from "../src/vanDale.js";

const testCases = [
  {
    input: ["zitten"],
    expected: [
      {
        word: "zitten",
        items: [
          {
            definition: "zich in een bep. houding op een stoel enz. bevinden",
            examples: [
              "ergens goed voor gaan zitten tijd nemen om iets te doen",
            ],
          },
          {
            definition: "zich bevinden; = zijn",
            examples: ["waar zit hij toch?"],
          },
          {
            definition: "in de gevangenis zijn",
            examples: ["hij heeft zes maanden gezeten"],
          },
          { definition: "passen", examples: ["die jas zit goed"] },
          {
            definition: "treffen, goed aankomen",
            examples: [
              "die zit die aanmerking was raak",
              "(voetbal) hij zit er is een doelpunt gemaakt",
            ],
          },
        ],
        examples: [
          "in het bestuur zitten bestuurslid zijn",
          "met een probleem zitten worstelen met een moeilijkheid",
          "die kat zit onder de vlooien heeft veel vlooien",
          "(onderwijs) blijven zitten een klas moeten overdoen, doubleren",
          "het er niet bij laten zitten ergens geen genoegen mee nemen",
          "er zit niets anders op het kan niet anders",
          "het zit me tot hier! ik heb er meer dan genoeg van",
          "iem. laten zitten in de steek laten",
          "hij zit te liegen hij liegt",
          "ze zitten elkaar te plagen ze plagen elkaar",
          "laat maar zitten (a) het te veel betaalde mag je houden (als fooi)",
          "(b) doe geen moeite",
          "dat zit wel goed is wel in orde",
          "het zit haar hoog (a) het houdt haar erg bezig",
          "(b) ze ergert zich er vreselijk aan",
          "het zit erin, het zit er dik in het zou best eens kunnen gebeuren",
          "dat zit er niet in (a) dat valt niet te verwachten",
          "(b) dat is niet mogelijk",
          "iets niet meer zien zitten geen mogelijkheid, geen oplossing zien",
        ],
      }
    ],
  },
];

describe.each(testCases)("getWord", ({ input, expected }) => {
  test(`should return ${expected} for ${input}`, async () => {
    const result = await getWord.apply(null, input);
    console.log(input, result);
    expect(result).toEqual(expected);
  });
});
