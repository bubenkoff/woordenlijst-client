import URL from "url-parse";
import { JSDOM } from "jsdom";

const searchURL = "https://www.vandale.nl/opzoeken?pattern=iemand&lang=nn";

const _parseWord = function (word, doc) {
  const searchResults = doc.querySelectorAll(
    ".main-content .block-content .snippets .f0j"
  );
  const searchResultsArray = Array.from(searchResults);
  const searchResultsItems = searchResultsArray
    .map((item) => {
      // loop over children of item that are text nodes and concatenate them
      const itemWord = Array.from(item.childNodes)
        .filter(
          (node) =>
            node.childNodes.length === 1 &&
            // check class name
            ["f0i", "ff"].includes(node.className)
        )
        .map((node) =>
          // clean up word from newlines, multiple spaces and spaces
          node.textContent.replace(/[^\w]/g, "").trim()
        )
        .join("");
      if (itemWord === word) {
        let examples
        const definitions = Array.from(item.querySelectorAll(".f3.f0g")).map(
          (node) => {
            const title = Array.from(node.querySelectorAll(".fz .f4"))
              .map((node) => node.textContent.trim())
              .join("");
            const definition = Array.from(node.querySelectorAll(".f0"))
              .map((node) => node.textContent)
              .join("");
            const parts = definition.split(":");
            // if title is a number
            if (title.match(/^\d+$/)) {
              return {
                definition: parts[0],
                examples: parts.slice(1).join(":").trim().split(";").map((item) => item.trim()).filter(Boolean),
              };
            } else {
              examples = definition.split(";").map((item) => item.trim()).filter(Boolean);
            }
          }
        ).filter(Boolean);
        return {
          word: itemWord,
          items: definitions,
          examples,
        };
      }
    })
    .filter(Boolean);
  return searchResultsItems;
};

export async function getWord(word) {
  const url = new URL(searchURL, true);
  url.query.pattern = word;
  const response = await fetch(url.toString(), {});
  const text = await response.text();
  const doc = new JSDOM(text).window.document;
  return _parseWord(word, doc);
}

export const parseWord = _parseWord;
