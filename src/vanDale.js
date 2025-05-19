import URL from "url-parse";
import { JSDOM } from "jsdom";

const searchURL = "https://zoeken.vandale.nl/api/zoeken/rest/free/freesearch?language=nn";
const synonymURL = "https://www.woordenboek.nl/synoniem";

const _parseWord = function (word, response) {
  // const doc = new JSDOM(text).window.document;
  const searchResultsArray = response?.articles || [];
  const searchResultsItems = searchResultsArray
    .map((item) => {
      // loop over children of item that are text nodes and concatenate them
      const itemWord = item.headword;
      if (itemWord === word) {
        let examples;
        const itemDoc = new JSDOM(item.content).window.document;
        const definitions = Array.from(itemDoc.querySelectorAll(".f3.f0g"))
          .map((node) => {
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
                examples: parts
                  .slice(1)
                  .join(":")
                  .trim()
                  .split(";")
                  .map((item) => item.trim())
                  .filter(Boolean),
              };
            } else {
              examples = definition
                .split(";")
                .map((item) => item.trim())
                .filter(Boolean);
            }
          })
          .filter(Boolean);
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
  const results = await response.json();
  return _parseWord(word, results);
}

export const parseWord = _parseWord;

const _parseSynonym = function (word, doc) {
  const searchResultsArray = Array.from(doc.querySelectorAll(".results"));
  const searchResultsItems = searchResultsArray
    .map((item) => {
      // get forecoming sibling of item
      const wordItem = item.previousElementSibling.querySelector(".bgc");
      const wordItemText = wordItem && wordItem.textContent;
      if (word !== wordItemText) {
        return;
      }
      return Array.from(item.querySelectorAll(".row .sc a, .row .sc .nolink"))
        .map((item) => {
          return item.textContent;
          // loop over children of item that are text nodes and concatenate them
        })
        .filter(Boolean);
    })
    .filter(Boolean);
  // flatten array
  const synonyms = searchResultsItems.flat();
  return synonyms ? [{ word, synonyms }] : [];
};

export const parseSynonym = _parseSynonym;

export async function getSynonym(word) {
  const url = new URL(synonymURL, true);
  url.pathname += `/${word}`;
  const response = await fetch(url.toString(), {});
  const text = await response.text();
  const doc = new JSDOM(text).window.document;
  return _parseSynonym(word, doc);
}
