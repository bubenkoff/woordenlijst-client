import URL from "url-parse";
import { XMLParser } from "fast-xml-parser";
import { presets } from "../babel.config.cjs";

const findWordURL = "https://woordenlijst.org/MolexServe/lexicon/find_wordform";

const parser = new XMLParser();

const partOfSpeechNames = {
  "NOU-C": "Zelfstandig naamwoord",
  AA: "Bijvoeglijk naamwoord",
  ADV: "Bijwoord",
  NUM: "Telwoord",
  INT: "Tussenwerpsel",
  CONJ: "Voegwoord",
  PD: "Voornaamwoord",
  ADP: "Voorzetsel",
  VRB: "Werkwoord",
  NOU: "Zelfstandig naamwoord",
  RES: "Overig",
};

export async function findWordForm(
  word,
  partOfSpeech,
  includedPartsOfSpeech,
  excludedPartsOfSpeech
) {
  const url = new URL(findWordURL, true);
  url.query = {
    database: "gig_pro_wrdlst",
    wordform: word,
    paradigm: "true",
    diminutive: "false",
    onlyvalid: "true",
    regex: "false",
  };
  if (partOfSpeech) {
    url.query.part_of_speech = partOfSpeech;
  }
  const response = await fetch(url.toString(), {});
  // parse XML response
  const text = await response.text();
  const jObj = parser.parse(text);
  return _parseWordForm(
    jObj,
    word,
    includedPartsOfSpeech,
    excludedPartsOfSpeech
  );
}

const _parseWordForm = function (
  jObj,
  word,
  includedPartsOfSpeech,
  excludedPartsOfSpeech
) {
  const partOfSpeechDefinitions = {
    "VRB(finiteness=inf)": {
      description: "infinitief (infinitivus).",
      example: "werken",
      reflexive: {
        prefix: "(zich)",
      },
    },
    "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=1)": {
      description: "tegenwoordige tijd (presens), enkelvoud, 1e persoon.",
      example: "ik werk",
      prefix: "ik",
      reflexive: {
        preSuffix: "(me)",
        separable: {
          prefix: "dat ik (me)",
          preSuffix: undefined,
        },
      },
      separable: {
        prefix: "dat ik",
      }
    },
    "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=2,position=bs)": {
      description: "tegenwoordige tijd (presens), enkelvoud, 2e persoon vraag.",
      example: "werk je?",
      preSuffix: "jij",
      suffix: "?",
      reflexive: {
        preSuffix: "jij (je)",
        suffix: "?",
      },
    },
    "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=2,position=as)": {
      description:
        "tegenwoordige tijd (presens), enkelvoud, 2e persoon bevestigend.",
      example: "jij werkt",
      prefix: "jij",
      reflexive: {
        preSuffix: "(je)",
        separable: {
          prefix: "dat jij (je)",
          preSuffix: undefined,
        },
      },
      separable: {  
        prefix: "dat jij",
      }
    },
    "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=2,usage=u)": {
      description:
        "tegenwoordige tijd (presens), enkelvoud, 2e persoon bevestigend u.",
      example: "u werkt",
      prefix: "u",
      reflexive: {
        preSuffix: "(zich)",
        separable: {
          prefix: "dat u (zich)",
          preSuffix: undefined,
        },
      },
      separable: {  
        prefix: "dat u",
      }
    },
    "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=3)": {
      description: "tegenwoordige tijd (presens), enkelvoud, 3e persoon.",
      example: "hij werkt",
      prefix: "hij/zij/het",
      reflexive: {
        preSuffix: "(zich)",
        separable: {
          prefix: "dat hij/zij/het (zich)",
          preSuffix: undefined,
        },
      },
      separable: {
        prefix: "dat hij/zij/het",
      }
    },
    "VRB(finiteness=fin,mood=ind,tense=pres,NA=pl,PA=1)": {
      description: "tegenwoordige tijd (presens), meervoud, 1e persoon.",
      example: "wij werken",
      prefix: "wij",
      reflexive: {
        preSuffix: "(ons)",
        separable: {
          prefix: "dat wij (ons)",
          preSuffix: undefined,
        },
      },
      separable: {
        prefix: "dat wij",
      }
    },
    "VRB(finiteness=fin,mood=ind,tense=pres,NA=pl,PA=2)": {
      description: "tegenwoordige tijd (presens), meervoud, 2e persoon.",
      example: "jullie werken",
      prefix: "jullie",
      reflexive: {
        preSuffix: "(je)",
        separable: {
          prefix: "dat jullie (je)",
          preSuffix: undefined,
        },
      },
      separable: {
        prefix: "dat jullie",
      }
    },
    "VRB(finiteness=fin,mood=ind,tense=pres,NA=pl,PA=3)": {
      description: "tegenwoordige tijd (presens), meervoud, 3e persoon.",
      example: "zij werken",
      prefix: "zij",
      reflexive: {
        preSuffix: "(zich)",
        separable: {
          prefix: "dat zij (zich)",
          preSuffix: undefined,
        },
      },
      separable: {
        prefix: "dat zij",
      }
    },
    "VRB(finiteness=fin,mood=ind,tense=past,NA=sg,PA=1)": {
      description: "verleden tijd (imperfectum), enkelvoud, 1e persoon.",
      example: "ik werkte",
      prefix: "ik",
      reflexive: {
        preSuffix: "(me)",
        separable: {
          prefix: "dat ik (me)",
          preSuffix: undefined,
        },
      },
      separable: {
        prefix: "dat ik",
      }
    },
    "VRB(finiteness=fin,mood=ind,tense=past,NA=sg,PA=2)": {
      description: "verleden tijd (imperfectum), enkelvoud, 2e persoon.",
      example: "jij werkte",
      prefix: "jij",
      reflexive: {
        preSuffix: "(je)",
        separable: {
          prefix: "dat jij (je)",
          preSuffix: undefined,
        },
      },
      separable: {
        prefix: "dat jij",
      }
    },
    "VRB(finiteness=fin,mood=ind,tense=past,NA=sg,PA=3)": {
      description: "verleden tijd (imperfectum), enkelvoud, 3e persoon.",
      example: "hij werkte",
      prefix: "hij/zij/het",
      reflexive: {
        preSuffix: "(zich)",
        separable: {
          prefix: "dat hij/zij/het (zich)",
          preSuffix: undefined,
        },
      },
      separable: {
        prefix: "dat hij/zij/het",
      }
    },
    "VRB(finiteness=fin,mood=ind,tense=past,NA=pl,PA=1)": {
      description: "verleden tijd (imperfectum), meervoud, 1e persoon.",
      example: "wij werkten",
      prefix: "wij",
      reflexive: {
        preSuffix: "(ons)",
        separable: {
          prefix: "dat wij (ons)",
          preSuffix: undefined,
        },
      },
      separable: {
        prefix: "dat wij",
      }
    },
    "VRB(finiteness=fin,mood=ind,tense=past,NA=pl,PA=2)": {
      description: "verleden tijd (imperfectum), meervoud, 2e persoon.",
      example: "jullie werkten",
      prefix: "jullie",
      reflexive: {
        preSuffix: "(je)",
        separable: {
          prefix: "dat jullie (je)",
          preSuffix: undefined,
        },
      },
      separable: {
        prefix: "dat jullie",
      }
    },
    "VRB(finiteness=fin,mood=ind,tense=past,NA=pl,PA=3)": {
      description: "verleden tijd (imperfectum), meervoud, 3e persoon.",
      example: "zij werkten",
      prefix: "zij",
      reflexive: {
        preSuffix: "(zich)",
        separable: {
          prefix: "dat zij (zich)",
          preSuffix: undefined,
        },
      },
      separable: {
        prefix: "dat zij",
      }
    },
    "VRB(finiteness=part,tense=pres)": {
      description: "tegenwoordig deelwoord (participium praesentis activi).",
      example: "werkend",
      reflexive: {
        prefix: "(zich)",
      },
    },
    "VRB(finiteness=part,tense=pres,infl=e)": {
      description:
        "tegenwoordig deelwoord (participium praesentis activi), eindigend op -e.",
      example: "werkende",
      reflexive: {
        prefix: "(zich)",
      },
    },
    "VRB(finiteness=part,tense=past)": {
      description: "voltooid deelwoord (participium perfecti passivi).",
      example: "gewerkt",
      useHelpVerb: true,
      reflexive: {
        prefix: "(zich)",
      },
    },
    "VRB(finiteness=fin,mood=imp)": {
      description: "gebiedende wijs (imperatief).",
      example: "werk!",
      suffix: "!",
      reflexive: {
        preSuffix: "(je)",
      },
    },
    "VRB(finiteness=fin,mood=imp,usage=u)": {
      description: "gebiedende wijs (imperatief) u.",
      example: "werkt u!",
      preSuffix: "u",
      suffix: "!",
      reflexive: {
        preSuffix: "u (zich)",
      },
    },
    "VRB(finiteness=fin,mood=conj)": {
      description: "aanvoegende wijs (coniunctivus). (moge ...)",
      example: "moge hij werken",
    },
    "VRB(finiteness=fin,mood=imp,sep=yes)": {
      description: "scheidbaar werkwoord, gebiedende wijs (imperatief).",
      example: "werk mee!",
      suffix: "!",
      reflexive: {
        preSuffix: "(je)",
      },
    },
    "VRB(finiteness=fin,mood=imp,usage=u,sep=yes)": {
      description: "scheidbaar werkwoord, gebiedende wijs (imperatief) u.",
      example: "werkt u mee!",
      preSuffix: "u",
      suffix: "!",
      reflexive: {
        preSuffix: "u (zich)",
      },
    },
    "VRB(finiteness=fin,mood=conj,sep=yes)": {
      description: "scheidbaar werkwoord, aanvoegende wijs (coniunctivus).",
      example: "moge hij meewerken",
    },
    "NOU-C(gender=n,number=sg)": {
      description: "zelfstandig naamwoord (substantief), enkelvoud, onzijdig.",
      example: "het mens",
    },
    "NOU-C(number=sg)": {
      description: "zelfstandig naamwoord (substantief), enkelvoud.",
      example: "de mens",
    },
    "NOU-C(gender=m,number=sg)": {
      description: "zelfstandig naamwoord (substantief), enkelvoud, mannelijk.",
      example: "de bos",
    },
    "NOU-C(number=pl)": {
      description: "zelfstandig naamwoord (substantief), meervoud.",
      example: "de mensen",
    },
    "VRB(type=mai)": {
      description: "hoofdwerkwoord (infinitivus).",
      example: "werken",
    },
    "VRB(type=mai,sep=yes)": {
      description: "scheidbaar werkwoord (tmesis).",
      example: "meehelpen",
    },
    "VRB(type=mai/aux)": {
      description: "hulpwerkwoord (auxilium).",
      example: "hebben",
    }
  };
  let lemmatas = jObj.root.found_lemmata;
  if (!Array.isArray(lemmatas)) {
    lemmatas = [lemmatas].filter(Boolean);
  }
  if (!lemmatas.length) {
    console.error(`No lemmatas found for word ${word}`);
    return [];
  }

  const result = lemmatas.map((lemmata) => {
    const partOfSpeechDefinition =
      partOfSpeechDefinitions[lemmata.lemma_part_of_speech];
    if (!partOfSpeechDefinition) {
      console.error(
        `No definition found for part of speech ${lemmata.lemma_part_of_speech}`
      );
    }
    const isSeparable = lemmata.lemma_part_of_speech.includes("sep=yes");
    // get help verb
    const helpVerb = lemmata.hulpwerkwoord === "zijn" ? "zijn" : "heeft";
    const verbFeatures = lemmata.verb_features;
    const isReflexive = verbFeatures.includes("refl");
    // get paradigms
    let paradigms = lemmata.paradigm.paradigm;
    if (!Array.isArray(paradigms)) {
      paradigms = [paradigms].filter(Boolean);
    }
    paradigms = paradigms.filter(
      (item) =>
        !item.arch &&
        (!excludedPartsOfSpeech ||
          !excludedPartsOfSpeech.length ||
          excludedPartsOfSpeech.indexOf(item.part_of_speech) === -1) &&
        (!includedPartsOfSpeech ||
          !includedPartsOfSpeech.length ||
          includedPartsOfSpeech.indexOf(item.part_of_speech) !== -1)
    );
    //   // group by part_of_speech
    //   const grouped = paradigms.reduce((acc, cur) => {
    //     const pos = cur.part_of_speech;
    //     if (!acc[pos]) {
    //       acc[pos] = [];
    //     }
    //     acc[pos].push(cur);
    //     return acc;
    //   }, {});
    //   console.log(grouped);
    const forms = paradigms.map((item) => {
      console.log(item);
      const part = partOfSpeechDefinitions[item.part_of_speech];
      const wordParts = item.wordform.split(" ");
      if (part.reflexive && isReflexive) {
        Object.assign(part, part.reflexive);
        if (part.reflexive.separable && isSeparable && wordParts.length === 1) {
          Object.assign(part, part.reflexive.separable);
        }
      } else if (isSeparable && wordParts.length === 1 && part.separable) {
        Object.assign(part, part.separable);
      }
      let suffix =
        part.suffix && !part.suffix.match(/[.!?]/)
          ? ` ${part.suffix}`
          : part.suffix || "";
      // add space before suffix if it's not a punctuation mark
      if (part.preSuffix) {
        if (item.part_of_speech.includes("sep=yes") || isSeparable) {
          // separable verb
          wordParts.splice(1, 0, part.preSuffix);
          item.wordform = wordParts.join(" ").trim();
        } else {
          suffix = ` ${part.preSuffix}${suffix}`;
        }
      }
      const helpSuffix = `${part.useHelpVerb ? `${helpVerb} ` : ""}`
      const descriptionSuffix =
        part.prefix || suffix || helpSuffix
          ? ` (${helpSuffix}${`${part.prefix || ""} ...${suffix || ""}`.trim()})`
          : "";
      return {
        partOfSpeech: item.part_of_speech,
        description: part.description + descriptionSuffix,
        form: item.wordform,
        // ...(part.prefix && { prefix: part.prefix }),
        // ...(part.suffix && {
        //   suffix: part.suffix,
        // }),
        example: `${part.useHelpVerb ? `${helpVerb} ` : ""}${
          part.prefix ? part.prefix + " " : ""
        }${item.wordform}${suffix}`.trim(),
      };
    });
    // console.log(paradigms);
    return {
      word: lemmata.lemma,
      forms,
      description: partOfSpeechDefinition.description,
    };
  });
  return result;
};

// export parseWordForm
export const parseWordForm = _parseWordForm;
