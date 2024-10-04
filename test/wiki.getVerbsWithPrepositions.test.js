import { inspect } from "util";
inspect.defaultOptions.depth = null;

import { getVerbsWithPrepositions } from "../src/wiki.js";

const testCases = [
  {
    input: [["zitten"]],
    expected: [
      {
        verb: "zitten",
        prefix: "",
        preposition: "bij",
        example: "zitten bij",
      },
      {
        verb: "zitten",
        prefix: "",
        preposition: "in",
        example: "zitten in",
      },
      {
        verb: "zitten",
        prefix: "",
        preposition: "naast",
        example: "zitten naast",
      },
      {
        verb: "zitten",
        prefix: "",
        preposition: "om",
        example: "zitten om",
      },
      {
        verb: "zitten",
        prefix: "",
        preposition: "op",
        example: "zitten op",
      },
      {
        verb: "zitten",
        prefix: "",
        preposition: "rond",
        example: "zitten rond",
      },
    ],
  },
  {
    input: [["aanpassen"]],
    expected: [
      {
        verb: "(zich) aanpassen",
        prefix: "(zich)",
        preposition: "aan",
        example: "zich aanpassen aan",
      },
    ],
  },
];

describe.each(testCases)("getVerbsWithPrepositions", ({ input, expected }) => {
  test(`should return ${expected} for ${input}`, async () => {
    const result = await getVerbsWithPrepositions.apply(null, input);
    console.log(result);
    expect(result).toEqual(expected);
  });
});
