import URL from "url-parse";
import { JSDOM } from "jsdom";

const verbPrepositionListURL =
  "https://nl.wiktionary.org/wiki/WikiWoordenboek:Lijst_van_vaste_voorzetsels";
const searchURL =
  "https://nl.wiktionary.org/w/index.php?search=%22zitten+bij%22&title=Speciaal:Zoeken&profile=advanced&fulltext=1&ns0=1";

const _parseVerbsWithPrepositions = function (doc, words) {
  if (typeof words === "string") {
    words = [words];
  }
  const wordList = doc.querySelectorAll(".mw-parser-output ul li");
  const wordListArray = Array.from(wordList);
  // form mapping in form word -> prefix
  const verbForms = [];
  wordListArray.forEach((item) => {
    // find a tag which is the verb
    const aTag = item.querySelector("a");
    if (!aTag || !aTag.nextSibling || !item.firstChild) {
      return;
    }
    const verb = aTag.textContent;
    if (words && words.indexOf(verb) === -1) {
      return;
    }
    const prefix =
      item.firstChild.nodeType === 3 ? item.firstChild.textContent.trim() : "";
    const preposition = aTag.nextSibling.textContent.trim();
    const example = `${prefix} ${verb} ${preposition}`.trim();
    const cleanExample = example
    .replace(/[^\w\s\']/g, " ")
    .replace(/\s+/g, " ")
    .trim();
    const verbKey = `${prefix} ${verb}`.trim();
    verbForms.push({
      verb: verbKey,
      prefix,
      preposition,
      example: cleanExample,
    });
  });
  return verbForms;
};

const _parseVerbExample = function (verb, prefix, preposition, example, doc) {
  const searchResults = doc.querySelectorAll(".searchresults .searchresult");
  const searchResultsArray = Array.from(searchResults);
  const searchResultsItems = searchResultsArray.map((item) =>
    item.textContent.trim()
  );
  const cleanVerb = verb
    .replace(/[^\w\s\']/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  // find items that contain sentences in quotes with the verb form example, like "Ons lichaam is een meester in zich aanpassen aan warmte en kou"
  // console.log(searchResultsItems);
  const searchResultsTexts = searchResultsItems
    .filter((item) => item.includes(example))
    .map((item) => item.match(/(^|[".])+\s?"?(?<example>[^.]+)?/))
    .map((item) => item && item.groups && item.groups.example)
    .filter(Boolean)
    .filter((item) => item.includes(example))
    .map((item) => item.replaceAll(` ${example} `, ` ${cleanVerb} ... `));
  return {
    verb,
    prefix,
    example,
    preposition,
    searchResults: searchResultsTexts.pop(),
  };
};

export const parseVerbsWithPrepositions = _parseVerbsWithPrepositions;
export async function getVerbExample(verb, prefix, preposition, example) {
  const url = new URL(searchURL, true);
  url.query.search = `"${example}"`;
  const response = await fetch(url.toString(), {});
  const text = await response.text();
  const doc = new JSDOM(text).window.document;
  return _parseVerbExample(verb, prefix, preposition, example,  doc);
}

export const parseVerbExample = _parseVerbExample;
export async function getVerbsWithPrepositions(words, includedWords) {
  const url = new URL(verbPrepositionListURL, true);
  const response = await fetch(url.toString(), {});
  // parse XML response
  const text = await response.text();
  const doc = new JSDOM(text).window.document;
  return _parseVerbsWithPrepositions(doc, words, includedWords);
}
