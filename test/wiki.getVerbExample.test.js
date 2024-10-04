import { inspect } from "util";
inspect.defaultOptions.depth = null;
inspect.defaultOptions.maxArrayLength = null;

import { getVerbExample } from "../src/wiki.js";

const testCases = [
  {
    input: ["zitten", "", "bij", "zitten bij"],
    expected: {
      verb: "zitten",
      prefix: "",
      preposition: "bij",
      example: "zitten bij",
      searchResults: expect.stringMatching(/zitten \.\.\. /),
    },
  },
  {
    input: ["(zich) aanpassen", "(zich)", "aan", "zich aanpassen aan"],
    expected: {
      verb: "(zich) aanpassen",
      prefix: "(zich)",
      preposition: "aan",
      example: "zich aanpassen aan",
      searchResults: expect.stringMatching(/zich aanpassen \.\.\. /),
    },
  },
  {
    input: ["het opnemen", "het", "tegen", "het opnemen tegen"],
    expected: {
      verb: "het opnemen",
      prefix: "het",
      preposition: "tegen",
      example: "het opnemen tegen",
      searchResults: expect.stringMatching(/het opnemen \.\.\. /),
    },
  },
  {
    input: ["vervallen", "", "tot", "vervallen tot"],
    expected: {
      verb: "vervallen",
      prefix: "",
      preposition: "tot",
      example: "vervallen tot",
      searchResults: expect.stringMatching(/vervallen \.\.\. /),
    },
  },
  {
    input: ["vervallen", "", "op", "vervallen op"],
    expected: {
      verb: "vervallen",
      prefix: "",
      preposition: "op",
      example: "vervallen op",
      // non-existent combination
      searchResults: undefined,
    },
  },
];

describe.each(testCases)("getVerbExample", ({ input, expected }) => {
  test(`should return ${expected} for ${input}`, async () => {
    const result = await getVerbExample.apply(null, input);
    console.log(input, result);
    expect(result).toMatchObject(expected);
  });
});
