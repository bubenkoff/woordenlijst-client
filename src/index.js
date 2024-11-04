import URL from "url-parse";
import { XMLParser } from "fast-xml-parser";
import {
  getVerbExample as _getVerbExample,
  getVerbsWithPrepositions as _getVerbsWithPrepositions,
} from "./wiki.js";
import { getWord as _getWordDefinitions, getSynonym as _getWordSynonyms } from "./vanDale.js";

const findWordURL = "https://woordenlijst.org/MolexServe/lexicon/find_wordform";

const parser = new XMLParser();

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
    diminutive: "true",
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
    "NOU-C": {
      description:
        "zelfstandig naamwoord (substantief), enkelvoud, mannelijk/vrouwelijk.",
      example: "de appel",
      simpleDescription: "Zelfstandig naamwoord",
    },
    "NOU-P": {
      description: "zelfstandig naamwoord (substantief), meervoud.",
      example: "de appels",
      simpleDescription: "Zelfstandig naamwoord",
    },
    INT: {
      description: "tussenwerpsel (interjection).",
      example: "hela",
      simpleDescription: "Tussenwerpsel",
    },
    NUM: {
      description: "telwoord (numeral).",
      example: "twee",
      simpleDescription: "Telwoord",
    },
    AA: {
      description: "bijvoeglijk naamwoord (adjectivum).",
      example: "mooi",
      simpleDescription: "Bijvoeglijk naamwoord",
    },
    ADV: {
      description: "bijwoord (adverbium).",
      example: "snel",
      simpleDescription: "Bijwoord",
    },
    VRB: {
      description: "werkwoord (verbum).",
      example: "zijn",
      simpleDescription: "Werkwoord",
    },
    NOU: {
      description: "zelfstandig naamwoord (substantief).",
      example: "de appel",
      simpleDescription: "Zelfstandig naamwoord",
    },
    RES: {
      description: "overig (residual).",
      example: "etc.",
      simpleDescription: "Overig",
    },
    CONJ: {
      description: "voegwoord (conjunction).",
      example: "en",
      simpleDescription: "Voegwoord",
    },
    PD: {
      description: "onbepaald voornaamwoord (pronoun indefinite).",
      example: "niemand",
      simpleDescription: "Onbepaald voornaamwoord",
    },
    ADP: {
      description: "voorzetsel (prepositie).",
      example: "in",
      simpleDescription: "Voorzetsel",
    },
    "AA(degree=pos)": {
      description: "bijvoeglijk naamwoord (adjectivum), positief.",
      example: "mooi",
    },
    "AA(degree=pos,infl=e)": {
      description:
        "bijvoeglijk naamwoord (adjectivum), positief, eindigend op -e.",
      example: "mooie",
    },
    "AA(degree=pos,case=gen)": {
      description: "bijvoeglijk naamwoord (adjectivum), positief, genitief.",
      example: "moois",
    },
    "AA(degree=comp)": {
      description: "bijvoeglijk naamwoord (adjectivum), comparatief.",
      example: "mooier",
    },
    "AA(degree=comp,infl=e)": {
      description:
        "bijvoeglijk naamwoord (adjectivum), comparatief, eindigend op -e.",
      example: "mooiere",
    },
    "AA(degree=comp,case=gen)": {
      description: "bijvoeglijk naamwoord (adjectivum), comparatief, genitief.",
      example: "mooiers",
    },
    "AA(degree=sup)": {
      description: "bijvoeglijk naamwoord (adjectivum), superlatief.",
      example: "mooist",
    },
    "AA(degree=sup,infl=e)": {
      description:
        "bijvoeglijk naamwoord (adjectivum), superlatief, eindigend op -e.",
      example: "mooiste",
    },
    "CONJ(type=sub)": {
      description: "onderschikkend voegwoord (conjunction subordinating).",
      example: "dat",
    },
    "NOU-C(gender=n,number=sg,wf=abbr)": {
      description: "afkorting (afkorting).",
      example: "uur",
    },
    "INT(type=form)": {
      description: "vragend voornaamwoord (pronoun interrogative).",
      example: "wie",
    },
    "NUM(type=card)": {
      description: "telwoord (numeral cardinal).",
      example: "twee",
    },
    "NUM(infl=en)": {
      description: "telwoord (numeral), eindigend op -en.",
      example: "tweeën",
    },
    "ADV(type=reg)": {
      description: "bijwoord (adverbium).",
      example: "snel",
    },
    "ADP(type=pre)": {
      description: "voorzetsel (prepositie).",
      example: "in",
    },
    "ADP(type=pre/post)": {
      description: "voorzetsel (prepositie/postpositie).",
      example: "in",
    },
    "NOU-C(gender=m/f/n,number=sg)": {
      description:
        "zelfstandig naamwoord (substantief), enkelvoud, mannelijk/vrouwelijk/onzijdig.",
      example: "de appel",
    },
    "NOU-C(gender=m/f/n,number=pl)": {
      description:
        "zelfstandig naamwoord (substantief), meervoud, mannelijk/vrouwelijk/onzijdig.",
      example: "de appels",
    },
    "NOU-P(gender=n,number=sg)": {
      description: "zelfstandig naamwoord (substantief), enkelvoud, onzijdig.",
      example: "het appel",
    },
    "PD(type=indef)": {
      description: "onbepaald voornaamwoord (pronoun indefinite).",
      example: "niemand",
    },
    "PD(case=nom,number=sg)": {
      description:
        "onbepaald voornaamwoord (pronoun indefinite), nominatief, enkelvoud.",
      example: "niemand",
    },
    "PD(case=dat,number=sg)": {
      description:
        "onbepaald voornaamwoord (pronoun indefinite), datief, enkelvoud.",
      example: "niemand",
    },
    "PD(case=acc,number=sg)": {
      description:
        "onbepaald voornaamwoord (pronoun indefinite), accusatief, enkelvoud.",
      example: "niemand",
    },
    "PD(case=nom,number=pl)": {
      description:
        "onbepaald voornaamwoord (pronoun indefinite), nominatief, meervoud.",
      example: "niemanden",
    },
    "PD(case=dat,number=pl)": {
      description:
        "onbepaald voornaamwoord (pronoun indefinite), datief, meervoud.",
      example: "niemanden",
    },
    "PD(case=acc,number=pl)": {
      description:
        "onbepaald voornaamwoord (pronoun indefinite), accusatief, meervoud.",
      example: "niemanden",
    },
    "CONJ(type=coor)": {
      description: "nevenschikkend voegwoord (conjunction coordinating).",
      example: "en",
    },
    "NUM(infl=e)": {
      description: "telwoord (numeral), eindigend op -e.",
      example: "twee",
    },
    "RES(type=symb)": {
      description: "symbool (symbol).",
      example: "€",
    },
    "NOU-P(gender=m,number=sg)": {
      description: "zelfstandig naamwoord (substantief), enkelvoud, mannelijk.",
      example: "de appel",
    },
    "VRB(type=mai/cop/aux)": {
      description: "werkwoord (verbum).",
      example: "zijn",
    },
    "NOU-C(gender=f,number=sg,wf=abbr)": {
      description: "afkorting (afkorting).",
      example: "uur",
    },
    "ADV(type=reg,wf=abbr)": {
      description: "bijwoord (adverbium), afkorting.",
      example: "snel",
    },
    "NOU-C(gender=m,number=sg,wf=abbr)": {
      description: "afkorting (afkorting).",
      example: "uur",
    },
    "NOU-P(gender=f,number=sg)": {
      description:
        "zelfstandig naamwoord (substantief), enkelvoud, vrouwelijk.",
      example: "de appel",
    },
    "ADV(type=pron,sep=yes)": {
      description: "scheidbaar bijwoord (adverbium).",
      example: "eruit",
    },
    "PD(type=dem)": {
      description: "aanwijzend voornaamwoord (pronoun demonstrative).",
      example: "dat",
    },
    "PD(case=nom,number=sg,infl=e)": {
      description:
        "aanwijzend voornaamwoord (pronoun demonstrative), nominatief, enkelvoud, eindigend op -e.",
      example: "deze",
    },
    "PD(case=gen,number=sg)": {
      description:
        "aanwijzend voornaamwoord (pronoun demonstrative), genitief, enkelvoud.",
      example: "dezer",
    },
    "PD(case=dat,number=sg,infl=e)": {
      description:
        "aanwijzend voornaamwoord (pronoun demonstrative), datief, enkelvoud, eindigend op -e.",
      example: "deze",
    },
    "PD(case=acc,number=sg,infl=e)": {
      description:
        "aanwijzend voornaamwoord (pronoun demonstrative), accusatief, enkelvoud, eindigend op -e.",
      example: "deze",
    },
    "NUM(type=ord)": {
      description: "rangtelwoord (numeral ordinal).",
      example: "tweede",
    },
    "ADP(type=pre/circ)": {
      description: "voorzetsel (prepositie/circumpositie).",
      example: "in",
    },
    "ADP(type=circ)": {
      description: "circumpositie (circumposition).",
      example: "in",
    },
    "PD(type=indef,subtype=art)": {
      description: "onbepaald voornaamwoord (pronoun indefinite), artikel.",
      example: "een",
    },
    "PD(case=nom)": {
      description: "onbepaald voornaamwoord (pronoun indefinite), nominatief.",
      example: "niemand",
    },
    "PD(case=nom,infl=e)": {
      description:
        "onbepaald voornaamwoord (pronoun indefinite), nominatief, eindigend op -e.",
      example: "niemand",
    },
    "PD(case=dat)": {
      description: "onbepaald voornaamwoord (pronoun indefinite), datief.",
      example: "niemand",
    },
    "PD(case=dat,infl=e)": {
      description:
        "onbepaald voornaamwoord (pronoun indefinite), datief, eindigend op -e.",
      example: "niemand",
    },
    "PD(case=acc)": {
      description: "onbepaald voornaamwoord (pronoun indefinite), accusatief.",
      example: "niemand",
    },
    "PD(case=acc,infl=e)": {
      description:
        "onbepaald voornaamwoord (pronoun indefinite), accusatief, eindigend op -e.",
      example: "niemand",
    },
    "NOU-P(gender=f,number=sg,wf=abbr)": {
      description: "afkorting (afkorting).",
      example: "uur",
    },
    "NOU-P(gender=n,number=sg,wf=abbr)": {
      description: "afkorting (afkorting).",
      example: "uur",
    },
    "PD(type=rel)": {
      description: "betrekkelijk voornaamwoord (pronoun relative).",
      example: "die",
    },
    "PD(type=pers,gender=m,person=3,number=sg)": {
      description:
        "persoonlijk voornaamwoord (pronoun personal), mannelijk, 3e persoon, enkelvoud.",
      example: "hij",
    },
    "PD(type=pers,person=1,number=sg)": {
      description:
        "persoonlijk voornaamwoord (pronoun personal), 1e persoon, enkelvoud.",
      example: "ik",
    },
    "PD(type=pers,person=2,number=sg)": {
      description:
        "persoonlijk voornaamwoord (pronoun personal), 2e persoon, enkelvoud.",
      example: "jij",
    },
    "PD(type=recip)": {
      description: "wederkerend voornaamwoord (pronoun reciprocal).",
      example: "elkaar",
    },
    "PD(case=gen)": {
      description: "onbepaald voornaamwoord (pronoun indefinite), genitief.",
      example: "niemands",
    },
    "PD(type=pers,gender=m/f,person=3,number=sg)": {
      description:
        "persoonlijk voornaamwoord (pronoun personal), mannelijk/vrouwelijk, 3e persoon, enkelvoud.",
      example: "hij/zij/het",
    },
    "PD(type=refl,person=1,number=pl)": {
      description:
        "wederkerend voornaamwoord (pronoun reflexive), 1e persoon, meervoud.",
      example: "ons",
    },
    "PD(type=pers,person=1,number=pl)": {
      description:
        "persoonlijk voornaamwoord (pronoun personal), 1e persoon, meervoud.",
      example: "wij",
    },
    "AA(degree=pos,wf=abbr)": {
      description: "afkorting (afkorting).",
      example: "mooi",
    },
    "NOU-P(gender=m/f,number=sg)": {
      description:
        "zelfstandig naamwoord (substantief), enkelvoud, mannelijk/vrouwelijk.",
      example: "de appel",
    },
    "NOU-P(gender=m/f,number=sg,wf=abbr)": {
      description: "afkorting (afkorting).",
      example: "uur",
    },
    "PD(type=refl,person=2,number=sg/pl)": {
      description:
        "wederkerend voornaamwoord (pronoun reciprocal), 2e persoon, enkelvoud/meervoud.",
      example: "je/jullie",
    },
    "PD(type=pers,person=2,number=sg/pl)": {
      description:
        "persoonlijk voornaamwoord (pronoun personal), 2e persoon, enkelvoud/meervoud.",
      example: "jij/jullie",
    },
    "ADV(type=pron)": {
      description: "aanwijzend voornaamwoord (pronoun demonstrative).",
      example: "dat",
    },
    "NOU-P(number=pl,wf=abbr)": {
      description: "afkorting (afkorting).",
      example: "uur",
    },
    "VRB(type=mai/cop/aux,sep=yes)": {
      description: "scheidbaar werkwoord (verbum).",
      example: "opnemen",
    },
    "NOU-P(number=pl)": {
      description: "zelfstandig naamwoord (substantief), meervoud.",
      example: "de appels",
    },
    "NOU-P(gender=m,number=pl)": {
      description: "zelfstandig naamwoord (substantief), meervoud, mannelijk.",
      example: "de appels",
    },
    "NOU-C(gender=m,number=sg,case=gen)": {
      description:
        "zelfstandig naamwoord (substantief), enkelvoud, mannelijk, genitief.",
      example: "des appel",
    },
    "PD(type=refl,person=3,number=sg/pl)": {
      description:
        "wederkerend voornaamwoord (pronoun reciprocal), 3e persoon, enkelvoud/meervoud.",
      example: "zich",
    },
    "NUM(case=dat)": {
      description: "telwoord (numeral), datief.",
      example: "twee",
    },
    "PD(case=gen,number=pl)": {
      description:
        "onbepaald voornaamwoord (pronoun indefinite), genitief, meervoud.",
      example: "niemands",
    },
    "CONJ(type=coor/sub)": {
      description: "voegwoord (conjunction), nevenschikkend/onderschikkend.",
      example: "en/dat",
    },
    "PD(type=dem,subtype=art)": {
      description: "aanwijzend voornaamwoord (pronoun demonstrative), artikel.",
      example: "die",
    },
    "PD(type=poss,gender=f,person=3,number=sg)": {
      description:
        "bezittelijk voornaamwoord (pronoun possessive), vrouwelijk, 3e persoon, enkelvoud.",
      example: "haar",
    },
    "PD(type=pers,gender=f,person=3,number=sg)": {
      description:
        "persoonlijk voornaamwoord (pronoun personal), vrouwelijk, 3e persoon, enkelvoud.",
      example: "zij",
    },
    "PD(type=pers,person=3,number=pl)": {
      description:
        "persoonlijk voornaamwoord (pronoun personal), 3e persoon, meervoud.",
      example: "zij",
    },
    "PD(type=pers,gender=n,person=3,number=sg)": {
      description:
        "persoonlijk voornaamwoord (pronoun personal), onzijdig, 3e persoon, enkelvoud.",
      example: "het",
    },
    "PD(type=poss,person=3,number=pl)": {
      description:
        "bezittelijk voornaamwoord (pronoun possessive), 3e persoon, meervoud.",
      example: "hun",
    },
    "PD(type=poss,person=2,number=sg)": {
      description:
        "bezittelijk voornaamwoord (pronoun possessive), 2e persoon, enkelvoud.",
      example: "jouw",
    },
    "PD(type=poss,person=2,number=pl)": {
      description:
        "bezittelijk voornaamwoord (pronoun possessive), 2e persoon, meervoud.",
      example: "jullie",
    },
    "PD(type=pers,person=2,number=pl)": {
      description:
        "persoonlijk voornaamwoord (pronoun personal), 2e persoon, meervoud.",
      example: "jullie",
    },
    "NOU-C(number=pl,wf=abbr)": {
      description: "afkorting (afkorting).",
      example: "uur",
    },
    "PD(type=refl,person=1,number=sg)": {
      description:
        "wederkerend voornaamwoord (pronoun reciprocal), 1e persoon, enkelvoud.",
      example: "me",
    },
    "PD(type=poss,person=1,number=sg)": {
      description:
        "bezittelijk voornaamwoord (pronoun possessive), 1e persoon, enkelvoud.",
      example: "mijn",
    },
    "PD(type=poss,person=1,number=pl)": {
      description:
        "bezittelijk voornaamwoord (pronoun possessive), 1e persoon, meervoud.",
      example: "ons",
    },
    "NOU-C(gender=m/f,number=sg,wf=abbr)": {
      description: "afkorting (afkorting).",
      example: "uur",
    },
    "PD(type=poss,person=2,number=sg/pl)": {
      description:
        "bezittelijk voornaamwoord (pronoun possessive), 2e persoon, enkelvoud/meervoud.",
      example: "je/jullie",
    },
    "PD(type=inter)": {
      description: "aanwijzend voornaamwoord (pronoun demonstrative).",
      example: "dat",
    },
    "PD(type=excl)": {
      description: "aanwijzend voornaamwoord (pronoun demonstrative).",
      example: "dat",
    },
    "PD(type=poss,gender=m/n,person=3,number=sg)": {
      description:
        "bezittelijk voornaamwoord (pronoun possessive), mannelijk/onzijdig, 3e persoon, enkelvoud.",
      example: "zijn",
    },
    "VRB(finiteness=fin,mood=conj,tense=past)": {
      description:
        "aanvoegende wijs (conjunctivus), verleden tijd (imperfectum).",
      example: "werkte",
    },
    "VRB(finiteness=fin,mood=ind,tense=past,NA=sg,PA=2,usage=u)": {
      description:
        "verleden tijd (imperfectum), enkelvoud, 2e persoon bevestigend u.",
      example: "u werkte",
    },
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
      },
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
      },
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
      },
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
      },
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
      },
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
      },
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
      },
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
      },
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
      },
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
      },
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
      },
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
      },
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
      },
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
    "NOU-C(number=sg)": {
      description: "zelfstandig naamwoord (substantief), enkelvoud.",
      example: "de mens",
    },
    "NOU-C(number=pl)": {
      description: "zelfstandig naamwoord (substantief), meervoud.",
      example: "de mensen",
    },
    "NOU-C(gender=n,number=sg)": {
      description: "zelfstandig naamwoord (substantief), enkelvoud, onzijdig.",
      example: "het mens",
      gender: "onzijdig",
    },
    "NOU-C(gender=m,number=sg)": {
      description: "zelfstandig naamwoord (substantief), enkelvoud, mannelijk.",
      example: "de bos",
      gender: "mannelijk",
    },
    "NOU-C(gender=m/f,number=sg)": {
      description:
        "zelfstandig naamwoord (substantief), enkelvoud, mannelijk/vrouwelijk.",
      example: "de vrucht",
      gender: "mannelijk/vrouwelijk",
    },
    "NOU-C(gender=m/n,number=sg)": {
      description:
        "zelfstandig naamwoord (substantief), enkelvoud, mannelijk/onzijdig.",
      example: "het knoflook",
      gender: "mannelijk/onzijdig",
    },
    "NOU-C(gender=f/n,number=sg)": {
      description:
        "zelfstandig naamwoord (substantief), enkelvoud, vrouwelijk/onzijdig.",
      example: "het meisje",
      gender: "vrouwelijk/onzijdig",
    },
    "NOU-C(gender=f,number=sg)": {
      description:
        "zelfstandig naamwoord (substantief), enkelvoud, vrouwelijk.",
      example: "de gemeenschap",
      gender: "vrouwelijk",
    },
    "NOU-C(gender=n,number=sg)": {
      description: "zelfstandig naamwoord (substantief), enkelvoud, onzijdig.",
      example: "het geluk",
      gender: "onzijdig",
    },
    "NOU-C(gender=n,number=pl)": {
      description: "zelfstandig naamwoord (substantief), meervoud, onzijdig.",
      example: "de gelukken",
      gender: "onzijdig",
    },
    "NOU-C(gender=m/f,number=pl)": {
      description:
        "zelfstandig naamwoord (substantief), meervoud, mannelijk/vrouwelijk.",
      example: "de vruchten",
      gender: "mannelijk/vrouwelijk",
    },
    "NOU-C(gender=m/n,number=pl)": {
      description:
        "zelfstandig naamwoord (substantief), meervoud, mannelijk/onzijdig.",
      example: "de knoflookken",
      gender: "mannelijk/onzijdig",
    },
    "NOU-C(gender=f/n,number=pl)": {
      description:
        "zelfstandig naamwoord (substantief), meervoud, vrouwelijk/onzijdig.",
      example: "de meisjes",
      gender: "vrouwelijk/onzijdig",
    },
    "NOU-C(gender=m,number=pl)": {
      description: "zelfstandig naamwoord (substantief), meervoud, mannelijk.",
      example: "de appels",
      gender: "mannelijk",
    },
    "NOU-C(gender=f,number=pl)": {
      description: "zelfstandig naamwoord (substantief), meervoud, vrouwelijk.",
      example: "de gemeenschappen",
      gender: "vrouwelijk",
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
    },
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
    const partOfSpeechType = lemmata.lemma_part_of_speech.split("(")[0];
    const partOfSpeechTypeDefinition =
      partOfSpeechDefinitions[partOfSpeechType];
    if (!partOfSpeechTypeDefinition) {
      console.error(
        `No definition found for part of speech type ${partOfSpeechType}`
      );
    }
    const hasGender = lemmata.lemma_part_of_speech.includes("gender=");
    const gender =
      hasGender &&
      lemmata.lemma_part_of_speech.split("gender=")[1].split(",")[0];
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
    // get diminutives
    let diminutives =
      lemmata.diminutives &&
      lemmata.diminutives.diminutives &&
      lemmata.diminutives.diminutives.paradigm &&
      lemmata.diminutives.diminutives.paradigm.paradigm;
    if (!Array.isArray(diminutives)) {
      diminutives = [diminutives].filter(Boolean);
    }
    diminutives = diminutives.filter(
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

    const parseGender = (gender) =>
      [
        gender.includes("onzijdig") ? "het" : null,
        gender.includes("mannelijk") || gender.includes("vrouwelijk")
          ? "de"
          : null,
      ].filter(Boolean);

    const parseParadigm = (item) => {
      // console.log(item);
      if (hasGender && !item.part_of_speech.includes("gender=")) {
        // add gender to part of speech
        item.part_of_speech = item.part_of_speech.replace(
          "number=",
          `gender=${gender},number=`
        );
      }
      const part = partOfSpeechDefinitions[item.part_of_speech];
      if (!part) {
        console.error(
          `No definition found for part of speech ${item.part_of_speech}`
        );
        return {};
      }
      const isPlural = item.part_of_speech.includes("number=pl");
      const wordParts = item.wordform.split(" ");
      const descriptionWordParts = wordParts.map(() => "...");
      item.descriptionWordForm = descriptionWordParts.join(" ").trim();
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
          descriptionWordParts.splice(1, 0, part.preSuffix);
          item.wordform = wordParts.join(" ").trim();
          item.descriptionWordForm = descriptionWordParts.join(" ").trim();
        } else {
          suffix = ` ${part.preSuffix}${suffix}`;
        }
      }
      const helpSuffix = `${part.useHelpVerb ? `${helpVerb} ` : ""}`;
      const descriptionSuffix =
        part.prefix || suffix || helpSuffix
          ? ` (${`${part.useHelpVerb ? `${helpVerb} ` : ""}${
              part.prefix ? part.prefix + " " : ""
            }${item.descriptionWordForm}${suffix}`.trim()})`
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
        ...(part.gender
          ? {
              gender: part.gender,
              articles: !isPlural ? parseGender(part.gender) : ["de"],
            }
          : {}),
      };
    };
    const forms = paradigms.map(parseParadigm);
    const diminutiveForms = diminutives.length
      ? diminutives.map(parseParadigm).map((item) => ({
          ...item,
          articles: item.partOfSpeech.includes("number=pl")
            ? item.articles
            : ["het"],
        }))
      : undefined;
    // console.log(paradigms);
    return {
      word: lemmata.lemma,
      forms,
      description: partOfSpeechDefinition.description,
      partOfSpeechType: partOfSpeechTypeDefinition.simpleDescription,
      ...(diminutiveForms ? { diminutiveForms } : {}),
      ...(partOfSpeechDefinition.gender && {
        gender: partOfSpeechDefinition.gender,
        articles: parseGender(partOfSpeechDefinition.gender),
      }),
    };
  });
  return result;
};

// export parseWordForm
export const parseWordForm = _parseWordForm;

export const getVerbExample = _getVerbExample;
export const getVerbsWithPrepositions = _getVerbsWithPrepositions;
export const getWordDefinitions = _getWordDefinitions;
export const getWordSynonyms = _getWordSynonyms;
