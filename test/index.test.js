import { inspect } from "util";
inspect.defaultOptions.depth = null;

import { findWordForm } from "../src/index.js";

const testCases = [
  {
    input: ["allerlei"],
    expected: [
      {
        word: "allerlei",
        forms: [
          {
            partOfSpeech: "PD(case=nom,number=sg)",
            description:
              "onbepaald voornaamwoord (pronoun indefinite), nominatief, enkelvoud.",
            form: "allerlei",
            example: "allerlei",
          },
          {
            partOfSpeech: "PD(case=dat,number=sg)",
            description:
              "onbepaald voornaamwoord (pronoun indefinite), datief, enkelvoud.",
            form: "allerlei",
            example: "allerlei",
          },
          {
            partOfSpeech: "PD(case=acc,number=sg)",
            description:
              "onbepaald voornaamwoord (pronoun indefinite), accusatief, enkelvoud.",
            form: "allerlei",
            example: "allerlei",
          },
          {
            partOfSpeech: "PD(case=nom,number=pl)",
            description:
              "onbepaald voornaamwoord (pronoun indefinite), nominatief, meervoud.",
            form: "allerlei",
            example: "allerlei",
          },
          {
            partOfSpeech: "PD(case=dat,number=pl)",
            description:
              "onbepaald voornaamwoord (pronoun indefinite), datief, meervoud.",
            form: "allerlei",
            example: "allerlei",
          },
          {
            partOfSpeech: "PD(case=acc,number=pl)",
            description:
              "onbepaald voornaamwoord (pronoun indefinite), accusatief, meervoud.",
            form: "allerlei",
            example: "allerlei",
          },
        ],
        description: "onbepaald voornaamwoord (pronoun indefinite).",
        partOfSpeechType: "Onbepaald voornaamwoord",
      },
      {
        word: "allerlei",
        forms: [
          {
            partOfSpeech: "NOU-C(gender=n,number=sg)",
            description:
              "zelfstandig naamwoord (substantief), enkelvoud, onzijdig.",
            form: "allerlei",
            example: "allerlei",
            gender: "onzijdig",
            articles: ["het"],
          },
        ],
        description:
          "zelfstandig naamwoord (substantief), enkelvoud, onzijdig.",
        partOfSpeechType: "Zelfstandig naamwoord",
        gender: "onzijdig",
        articles: ["het"],
      },
    ],
  },
  {
    input: ["kijken", "VRB"],
    expected: [
      {
        word: "kijken",
        forms: [
          {
            partOfSpeech: "VRB(finiteness=inf)",
            description: "infinitief (infinitivus).",
            form: "kijken",
            example: "kijken",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=1)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 1e persoon. (ik ...)",
            form: "kijk",
            example: "ik kijk",
          },
          {
            partOfSpeech:
              "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=2,position=bs)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 2e persoon vraag. (... jij?)",
            form: "kijk",
            example: "kijk jij?",
          },
          {
            partOfSpeech:
              "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=2,position=as)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 2e persoon bevestigend. (jij ...)",
            form: "kijkt",
            example: "jij kijkt",
          },
          {
            partOfSpeech:
              "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=2,usage=u)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 2e persoon bevestigend u. (u ...)",
            form: "kijkt",
            example: "u kijkt",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=3)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 3e persoon. (hij/zij/het ...)",
            form: "kijkt",
            example: "hij/zij/het kijkt",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=pl,PA=1)",
            description:
              "tegenwoordige tijd (presens), meervoud, 1e persoon. (wij ...)",
            form: "kijken",
            example: "wij kijken",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=pl,PA=2)",
            description:
              "tegenwoordige tijd (presens), meervoud, 2e persoon. (jullie ...)",
            form: "kijken",
            example: "jullie kijken",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=pl,PA=3)",
            description:
              "tegenwoordige tijd (presens), meervoud, 3e persoon. (zij ...)",
            form: "kijken",
            example: "zij kijken",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=sg,PA=1)",
            description:
              "verleden tijd (imperfectum), enkelvoud, 1e persoon. (ik ...)",
            form: "keek",
            example: "ik keek",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=sg,PA=2)",
            description:
              "verleden tijd (imperfectum), enkelvoud, 2e persoon. (jij ...)",
            form: "keek",
            example: "jij keek",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=sg,PA=3)",
            description:
              "verleden tijd (imperfectum), enkelvoud, 3e persoon. (hij/zij/het ...)",
            form: "keek",
            example: "hij/zij/het keek",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=pl,PA=1)",
            description:
              "verleden tijd (imperfectum), meervoud, 1e persoon. (wij ...)",
            form: "keken",
            example: "wij keken",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=pl,PA=2)",
            description:
              "verleden tijd (imperfectum), meervoud, 2e persoon. (jullie ...)",
            form: "keken",
            example: "jullie keken",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=pl,PA=3)",
            description:
              "verleden tijd (imperfectum), meervoud, 3e persoon. (zij ...)",
            form: "keken",
            example: "zij keken",
          },
          {
            partOfSpeech: "VRB(finiteness=part,tense=pres)",
            description:
              "tegenwoordig deelwoord (participium praesentis activi).",
            form: "kijkend",
            example: "kijkend",
          },
          {
            partOfSpeech: "VRB(finiteness=part,tense=pres,infl=e)",
            description:
              "tegenwoordig deelwoord (participium praesentis activi), eindigend op -e.",
            form: "kijkende",
            example: "kijkende",
          },
          {
            partOfSpeech: "VRB(finiteness=part,tense=past)",
            description:
              "voltooid deelwoord (participium perfecti passivi). (heeft ...)",
            form: "gekeken",
            example: "heeft gekeken",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=imp)",
            description: "gebiedende wijs (imperatief). (...!)",
            form: "kijk",
            example: "kijk!",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=imp,usage=u)",
            description: "gebiedende wijs (imperatief) u. (... u!)",
            form: "kijkt",
            example: "kijkt u!",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=conj)",
            description: "aanvoegende wijs (coniunctivus). (moge ...)",
            form: "kijke",
            example: "kijke",
          },
        ],
        partOfSpeechType: "Werkwoord",
        description: "hoofdwerkwoord (infinitivus).",
      },
    ],
  },
  {
    input: ["herinneren", "VRB"],
    expected: [
      {
        word: "herinneren",
        forms: [
          {
            partOfSpeech: "VRB(finiteness=inf)",
            description: "infinitief (infinitivus). ((zich) ...)",
            form: "herinneren",
            example: "(zich) herinneren",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=1)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 1e persoon. (ik ... (me))",
            form: "herinner",
            example: "ik herinner (me)",
          },
          {
            partOfSpeech:
              "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=2,position=bs)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 2e persoon vraag. (... jij (je)?)",
            form: "herinner",
            example: "herinner jij (je)?",
          },
          {
            partOfSpeech:
              "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=2,position=as)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 2e persoon bevestigend. (jij ... (je))",
            form: "herinnert",
            example: "jij herinnert (je)",
          },
          {
            partOfSpeech:
              "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=2,usage=u)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 2e persoon bevestigend u. (u ... (zich))",
            form: "herinnert",
            example: "u herinnert (zich)",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=3)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 3e persoon. (hij/zij/het ... (zich))",
            form: "herinnert",
            example: "hij/zij/het herinnert (zich)",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=pl,PA=1)",
            description:
              "tegenwoordige tijd (presens), meervoud, 1e persoon. (wij ... (ons))",
            form: "herinneren",
            example: "wij herinneren (ons)",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=pl,PA=2)",
            description:
              "tegenwoordige tijd (presens), meervoud, 2e persoon. (jullie ... (je))",
            form: "herinneren",
            example: "jullie herinneren (je)",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=pl,PA=3)",
            description:
              "tegenwoordige tijd (presens), meervoud, 3e persoon. (zij ... (zich))",
            form: "herinneren",
            example: "zij herinneren (zich)",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=sg,PA=1)",
            description:
              "verleden tijd (imperfectum), enkelvoud, 1e persoon. (ik ... (me))",
            form: "herinnerde",
            example: "ik herinnerde (me)",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=sg,PA=2)",
            description:
              "verleden tijd (imperfectum), enkelvoud, 2e persoon. (jij ... (je))",
            form: "herinnerde",
            example: "jij herinnerde (je)",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=sg,PA=3)",
            description:
              "verleden tijd (imperfectum), enkelvoud, 3e persoon. (hij/zij/het ... (zich))",
            form: "herinnerde",
            example: "hij/zij/het herinnerde (zich)",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=pl,PA=1)",
            description:
              "verleden tijd (imperfectum), meervoud, 1e persoon. (wij ... (ons))",
            form: "herinnerden",
            example: "wij herinnerden (ons)",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=pl,PA=2)",
            description:
              "verleden tijd (imperfectum), meervoud, 2e persoon. (jullie ... (je))",
            form: "herinnerden",
            example: "jullie herinnerden (je)",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=pl,PA=3)",
            description:
              "verleden tijd (imperfectum), meervoud, 3e persoon. (zij ... (zich))",
            form: "herinnerden",
            example: "zij herinnerden (zich)",
          },
          {
            partOfSpeech: "VRB(finiteness=part,tense=pres)",
            description:
              "tegenwoordig deelwoord (participium praesentis activi). ((zich) ...)",
            form: "herinnerend",
            example: "(zich) herinnerend",
          },
          {
            partOfSpeech: "VRB(finiteness=part,tense=pres,infl=e)",
            description:
              "tegenwoordig deelwoord (participium praesentis activi), eindigend op -e. ((zich) ...)",
            form: "herinnerende",
            example: "(zich) herinnerende",
          },
          {
            partOfSpeech: "VRB(finiteness=part,tense=past)",
            description:
              "voltooid deelwoord (participium perfecti passivi). (heeft (zich) ...)",
            form: "herinnerd",
            example: "heeft (zich) herinnerd",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=imp)",
            description: "gebiedende wijs (imperatief). (... (je)!)",
            form: "herinner",
            example: "herinner (je)!",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=imp,usage=u)",
            description: "gebiedende wijs (imperatief) u. (... u (zich)!)",
            form: "herinnert",
            example: "herinnert u (zich)!",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=conj)",
            description: "aanvoegende wijs (coniunctivus). (moge ...)",
            form: "herinnere",
            example: "herinnere",
          },
        ],
        partOfSpeechType: "Werkwoord",
        description: "hoofdwerkwoord (infinitivus).",
      },
    ],
  },
  {
    input: ["aanmelden", "VRB"],
    expected: [
      {
        word: "aanmelden",
        forms: [
          {
            partOfSpeech: "VRB(finiteness=inf)",
            description: "infinitief (infinitivus). ((zich) ...)",
            form: "aanmelden",
            example: "(zich) aanmelden",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=1)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 1e persoon. (ik ... (me) ...)",
            form: "meld (me) aan",
            example: "ik meld (me) aan",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=1)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 1e persoon. (dat ik (me) ...)",
            form: "aanmeld",
            example: "dat ik (me) aanmeld",
          },
          {
            partOfSpeech:
              "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=2,position=bs)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 2e persoon vraag. (... jij (je) ...?)",
            form: "meld jij (je) aan",
            example: "meld jij (je) aan?",
          },
          {
            partOfSpeech:
              "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=2,position=as)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 2e persoon bevestigend. (jij ... (je) ...)",
            form: "meldt (je) aan",
            example: "jij meldt (je) aan",
          },
          {
            partOfSpeech:
              "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=2,position=as)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 2e persoon bevestigend. (dat jij (je) ...)",
            form: "aanmeldt",
            example: "dat jij (je) aanmeldt",
          },
          {
            partOfSpeech:
              "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=2,usage=u)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 2e persoon bevestigend u. (u ... (zich) ...)",
            form: "meldt (zich) aan",
            example: "u meldt (zich) aan",
          },
          {
            partOfSpeech:
              "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=2,usage=u)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 2e persoon bevestigend u. (dat u (zich) ...)",
            form: "aanmeldt",
            example: "dat u (zich) aanmeldt",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=3)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 3e persoon. (hij/zij/het ... (zich) ...)",
            form: "meldt (zich) aan",
            example: "hij/zij/het meldt (zich) aan",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=3)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 3e persoon. (dat hij/zij/het (zich) ...)",
            form: "aanmeldt",
            example: "dat hij/zij/het (zich) aanmeldt",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=pl,PA=1)",
            description:
              "tegenwoordige tijd (presens), meervoud, 1e persoon. (wij ... (ons) ...)",
            form: "melden (ons) aan",
            example: "wij melden (ons) aan",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=pl,PA=1)",
            description:
              "tegenwoordige tijd (presens), meervoud, 1e persoon. (dat wij (ons) ...)",
            form: "aanmelden",
            example: "dat wij (ons) aanmelden",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=pl,PA=2)",
            description:
              "tegenwoordige tijd (presens), meervoud, 2e persoon. (jullie ... (je) ...)",
            form: "melden (je) aan",
            example: "jullie melden (je) aan",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=pl,PA=2)",
            description:
              "tegenwoordige tijd (presens), meervoud, 2e persoon. (dat jullie (je) ...)",
            form: "aanmelden",
            example: "dat jullie (je) aanmelden",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=pl,PA=3)",
            description:
              "tegenwoordige tijd (presens), meervoud, 3e persoon. (zij ... (zich) ...)",
            form: "melden (zich) aan",
            example: "zij melden (zich) aan",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=pl,PA=3)",
            description:
              "tegenwoordige tijd (presens), meervoud, 3e persoon. (dat zij (zich) ...)",
            form: "aanmelden",
            example: "dat zij (zich) aanmelden",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=sg,PA=1)",
            description:
              "verleden tijd (imperfectum), enkelvoud, 1e persoon. (ik ... (me) ...)",
            form: "meldde (me) aan",
            example: "ik meldde (me) aan",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=sg,PA=1)",
            description:
              "verleden tijd (imperfectum), enkelvoud, 1e persoon. (dat ik (me) ...)",
            form: "aanmeldde",
            example: "dat ik (me) aanmeldde",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=sg,PA=2)",
            description:
              "verleden tijd (imperfectum), enkelvoud, 2e persoon. (jij ... (je) ...)",
            form: "meldde (je) aan",
            example: "jij meldde (je) aan",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=sg,PA=2)",
            description:
              "verleden tijd (imperfectum), enkelvoud, 2e persoon. (dat jij (je) ...)",
            form: "aanmeldde",
            example: "dat jij (je) aanmeldde",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=sg,PA=3)",
            description:
              "verleden tijd (imperfectum), enkelvoud, 3e persoon. (hij/zij/het ... (zich) ...)",
            form: "meldde (zich) aan",
            example: "hij/zij/het meldde (zich) aan",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=sg,PA=3)",
            description:
              "verleden tijd (imperfectum), enkelvoud, 3e persoon. (dat hij/zij/het (zich) ...)",
            form: "aanmeldde",
            example: "dat hij/zij/het (zich) aanmeldde",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=pl,PA=1)",
            description:
              "verleden tijd (imperfectum), meervoud, 1e persoon. (wij ... (ons) ...)",
            form: "meldden (ons) aan",
            example: "wij meldden (ons) aan",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=pl,PA=1)",
            description:
              "verleden tijd (imperfectum), meervoud, 1e persoon. (dat wij (ons) ...)",
            form: "aanmeldden",
            example: "dat wij (ons) aanmeldden",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=pl,PA=2)",
            description:
              "verleden tijd (imperfectum), meervoud, 2e persoon. (jullie ... (je) ...)",
            form: "meldden (je) aan",
            example: "jullie meldden (je) aan",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=pl,PA=2)",
            description:
              "verleden tijd (imperfectum), meervoud, 2e persoon. (dat jullie (je) ...)",
            form: "aanmeldden",
            example: "dat jullie (je) aanmeldden",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=pl,PA=3)",
            description:
              "verleden tijd (imperfectum), meervoud, 3e persoon. (zij ... (zich) ...)",
            form: "meldden (zich) aan",
            example: "zij meldden (zich) aan",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=pl,PA=3)",
            description:
              "verleden tijd (imperfectum), meervoud, 3e persoon. (dat zij (zich) ...)",
            form: "aanmeldden",
            example: "dat zij (zich) aanmeldden",
          },
          {
            partOfSpeech: "VRB(finiteness=part,tense=pres)",
            description:
              "tegenwoordig deelwoord (participium praesentis activi). ((zich) ...)",
            form: "aanmeldend",
            example: "(zich) aanmeldend",
          },
          {
            partOfSpeech: "VRB(finiteness=part,tense=pres,infl=e)",
            description:
              "tegenwoordig deelwoord (participium praesentis activi), eindigend op -e. ((zich) ...)",
            form: "aanmeldende",
            example: "(zich) aanmeldende",
          },
          {
            partOfSpeech: "VRB(finiteness=part,tense=past)",
            description:
              "voltooid deelwoord (participium perfecti passivi). (heeft (zich) ...)",
            form: "aangemeld",
            example: "heeft (zich) aangemeld",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=imp,sep=yes)",
            description:
              "scheidbaar werkwoord, gebiedende wijs (imperatief). (... (je) ...!)",
            form: "meld (je) aan",
            example: "meld (je) aan!",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=imp,usage=u,sep=yes)",
            description:
              "scheidbaar werkwoord, gebiedende wijs (imperatief) u. (... u (zich) ...!)",
            form: "meldt u (zich) aan",
            example: "meldt u (zich) aan!",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=conj)",
            description: "aanvoegende wijs (coniunctivus). (moge ...)",
            form: "aanmelde",
            example: "aanmelde",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=conj,sep=yes)",
            description:
              "scheidbaar werkwoord, aanvoegende wijs (coniunctivus).",
            form: "melde aan",
            example: "melde aan",
          },
        ],
        partOfSpeechType: "Werkwoord",
        description: "scheidbaar werkwoord (tmesis).",
      },
    ],
  },
  {
    input: ["opschrijven", "VRB"],
    expected: [
      {
        word: "opschrijven",
        forms: [
          {
            partOfSpeech: "VRB(finiteness=inf)",
            description: "infinitief (infinitivus).",
            form: "opschrijven",
            example: "opschrijven",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=1)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 1e persoon. (ik ... ...)",
            form: "schrijf op",
            example: "ik schrijf op",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=1)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 1e persoon. (dat ik ...)",
            form: "opschrijf",
            example: "dat ik opschrijf",
          },
          {
            partOfSpeech:
              "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=2,position=bs)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 2e persoon vraag. (... jij ...?)",
            form: "schrijf jij op",
            example: "schrijf jij op?",
          },
          {
            partOfSpeech:
              "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=2,position=as)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 2e persoon bevestigend. (jij ... ...)",
            form: "schrijft op",
            example: "jij schrijft op",
          },
          {
            partOfSpeech:
              "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=2,position=as)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 2e persoon bevestigend. (dat jij ...)",
            form: "opschrijft",
            example: "dat jij opschrijft",
          },
          {
            partOfSpeech:
              "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=2,usage=u)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 2e persoon bevestigend u. (u ... ...)",
            form: "schrijft op",
            example: "u schrijft op",
          },
          {
            partOfSpeech:
              "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=2,usage=u)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 2e persoon bevestigend u. (dat u ...)",
            form: "opschrijft",
            example: "dat u opschrijft",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=3)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 3e persoon. (hij/zij/het ... ...)",
            form: "schrijft op",
            example: "hij/zij/het schrijft op",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=3)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 3e persoon. (dat hij/zij/het ...)",
            form: "opschrijft",
            example: "dat hij/zij/het opschrijft",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=pl,PA=1)",
            description:
              "tegenwoordige tijd (presens), meervoud, 1e persoon. (wij ... ...)",
            form: "schrijven op",
            example: "wij schrijven op",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=pl,PA=1)",
            description:
              "tegenwoordige tijd (presens), meervoud, 1e persoon. (dat wij ...)",
            form: "opschrijven",
            example: "dat wij opschrijven",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=pl,PA=2)",
            description:
              "tegenwoordige tijd (presens), meervoud, 2e persoon. (jullie ... ...)",
            form: "schrijven op",
            example: "jullie schrijven op",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=pl,PA=2)",
            description:
              "tegenwoordige tijd (presens), meervoud, 2e persoon. (dat jullie ...)",
            form: "opschrijven",
            example: "dat jullie opschrijven",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=pl,PA=3)",
            description:
              "tegenwoordige tijd (presens), meervoud, 3e persoon. (zij ... ...)",
            form: "schrijven op",
            example: "zij schrijven op",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=pl,PA=3)",
            description:
              "tegenwoordige tijd (presens), meervoud, 3e persoon. (dat zij ...)",
            form: "opschrijven",
            example: "dat zij opschrijven",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=sg,PA=1)",
            description:
              "verleden tijd (imperfectum), enkelvoud, 1e persoon. (ik ... ...)",
            form: "schreef op",
            example: "ik schreef op",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=sg,PA=1)",
            description:
              "verleden tijd (imperfectum), enkelvoud, 1e persoon. (dat ik ...)",
            form: "opschreef",
            example: "dat ik opschreef",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=sg,PA=2)",
            description:
              "verleden tijd (imperfectum), enkelvoud, 2e persoon. (jij ... ...)",
            form: "schreef op",
            example: "jij schreef op",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=sg,PA=2)",
            description:
              "verleden tijd (imperfectum), enkelvoud, 2e persoon. (dat jij ...)",
            form: "opschreef",
            example: "dat jij opschreef",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=sg,PA=3)",
            description:
              "verleden tijd (imperfectum), enkelvoud, 3e persoon. (hij/zij/het ... ...)",
            form: "schreef op",
            example: "hij/zij/het schreef op",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=sg,PA=3)",
            description:
              "verleden tijd (imperfectum), enkelvoud, 3e persoon. (dat hij/zij/het ...)",
            form: "opschreef",
            example: "dat hij/zij/het opschreef",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=pl,PA=1)",
            description:
              "verleden tijd (imperfectum), meervoud, 1e persoon. (wij ... ...)",
            form: "schreven op",
            example: "wij schreven op",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=pl,PA=1)",
            description:
              "verleden tijd (imperfectum), meervoud, 1e persoon. (dat wij ...)",
            form: "opschreven",
            example: "dat wij opschreven",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=pl,PA=2)",
            description:
              "verleden tijd (imperfectum), meervoud, 2e persoon. (jullie ... ...)",
            form: "schreven op",
            example: "jullie schreven op",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=pl,PA=2)",
            description:
              "verleden tijd (imperfectum), meervoud, 2e persoon. (dat jullie ...)",
            form: "opschreven",
            example: "dat jullie opschreven",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=pl,PA=3)",
            description:
              "verleden tijd (imperfectum), meervoud, 3e persoon. (zij ... ...)",
            form: "schreven op",
            example: "zij schreven op",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=pl,PA=3)",
            description:
              "verleden tijd (imperfectum), meervoud, 3e persoon. (dat zij ...)",
            form: "opschreven",
            example: "dat zij opschreven",
          },
          {
            partOfSpeech: "VRB(finiteness=part,tense=pres)",
            description:
              "tegenwoordig deelwoord (participium praesentis activi).",
            form: "opschrijvend",
            example: "opschrijvend",
          },
          {
            partOfSpeech: "VRB(finiteness=part,tense=pres,infl=e)",
            description:
              "tegenwoordig deelwoord (participium praesentis activi), eindigend op -e.",
            form: "opschrijvende",
            example: "opschrijvende",
          },
          {
            partOfSpeech: "VRB(finiteness=part,tense=past)",
            description:
              "voltooid deelwoord (participium perfecti passivi). (heeft ...)",
            form: "opgeschreven",
            example: "heeft opgeschreven",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=imp,sep=yes)",
            description:
              "scheidbaar werkwoord, gebiedende wijs (imperatief). (... ...!)",
            form: "schrijf op",
            example: "schrijf op!",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=imp,usage=u,sep=yes)",
            description:
              "scheidbaar werkwoord, gebiedende wijs (imperatief) u. (... u ...!)",
            form: "schrijft u op",
            example: "schrijft u op!",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=conj)",
            description: "aanvoegende wijs (coniunctivus). (moge ...)",
            form: "opschrijve",
            example: "opschrijve",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=conj,sep=yes)",
            description:
              "scheidbaar werkwoord, aanvoegende wijs (coniunctivus).",
            form: "schrijve op",
            example: "schrijve op",
          },
        ],
        partOfSpeechType: "Werkwoord",
        description: "scheidbaar werkwoord (tmesis).",
      },
    ],
  },
  {
    input: ["topic", "NOU-C(number=sg)"],
    expected: [
      {
        description:
          "zelfstandig naamwoord (substantief), enkelvoud, mannelijk/vrouwelijk/onzijdig.",
        forms: [
          {
            description:
              "zelfstandig naamwoord (substantief), enkelvoud, mannelijk/vrouwelijk/onzijdig.",
            example: "topic",
            form: "topic",
            partOfSpeech: "NOU-C(gender=m/f/n,number=sg)",
            gender: "mannelijk/vrouwelijk/onzijdig",
            articles: ["het", "de"],
          },
          {
            description:
              "zelfstandig naamwoord (substantief), meervoud, mannelijk/vrouwelijk/onzijdig.",
            example: "topics",
            form: "topics",
            partOfSpeech: "NOU-C(gender=m/f/n,number=pl)",
            gender: "mannelijk/vrouwelijk/onzijdig",
            articles: ["de"],
          },
        ],
        partOfSpeechType: "Zelfstandig naamwoord",
        gender: "mannelijk/vrouwelijk/onzijdig",
        articles: ["het", "de"],
        word: "topic",
      },
    ],
  },
  {
    input: ["bos", "NOU-C(number=sg)"],
    expected: [
      {
        word: "bos",
        forms: [
          {
            partOfSpeech: "NOU-C(gender=n,number=sg)",
            description:
              "zelfstandig naamwoord (substantief), enkelvoud, onzijdig.",
            form: "bos",
            example: "bos",
            gender: "onzijdig",
            articles: ["het"],
          },
          {
            partOfSpeech: "NOU-C(gender=n,number=pl)",
            description:
              "zelfstandig naamwoord (substantief), meervoud, onzijdig.",
            form: "bossen",
            example: "bossen",
            gender: "onzijdig",
            articles: ["de"],
          },
        ],
        description:
          "zelfstandig naamwoord (substantief), enkelvoud, onzijdig.",
        diminutiveForms: [
          {
            partOfSpeech: "NOU-C(gender=n,number=sg)",
            description:
              "zelfstandig naamwoord (substantief), enkelvoud, onzijdig.",
            form: "bosje",
            example: "bosje",
            gender: "onzijdig",
            articles: ["het"],
          },
          {
            partOfSpeech: "NOU-C(gender=n,number=pl)",
            description:
              "zelfstandig naamwoord (substantief), meervoud, onzijdig.",
            form: "bosjes",
            example: "bosjes",
            gender: "onzijdig",
            articles: ["de"],
          },
        ],
        gender: "onzijdig",
        articles: ["het"],
        partOfSpeechType: "Zelfstandig naamwoord",
      },
      {
        word: "bos",
        forms: [
          {
            partOfSpeech: "NOU-C(gender=m,number=sg)",
            description:
              "zelfstandig naamwoord (substantief), enkelvoud, mannelijk.",
            form: "bos",
            example: "bos",
            gender: "mannelijk",
            articles: ["de"],
          },
          {
            partOfSpeech: "NOU-C(gender=m,number=pl)",
            description:
              "zelfstandig naamwoord (substantief), meervoud, mannelijk.",
            form: "bossen",
            example: "bossen",
            gender: "mannelijk",
            articles: ["de"],
          },
        ],
        description:
          "zelfstandig naamwoord (substantief), enkelvoud, mannelijk.",
        diminutiveForms: [
          {
            partOfSpeech: "NOU-C(gender=m,number=sg)",
            description:
              "zelfstandig naamwoord (substantief), enkelvoud, mannelijk.",
            form: "bosje",
            example: "bosje",
            gender: "mannelijk",
            articles: ["het"],
          },
          {
            partOfSpeech: "NOU-C(gender=m,number=pl)",
            description:
              "zelfstandig naamwoord (substantief), meervoud, mannelijk.",
            form: "bosjes",
            example: "bosjes",
            gender: "mannelijk",
            articles: ["de"],
          },
        ],
        partOfSpeechType: "Zelfstandig naamwoord",
        gender: "mannelijk",
        articles: ["de"],
      },
    ],
  },
  {
    input: ["aankomen", "VRB", [], []],
    expected: [
      {
        word: "aankomen",
        forms: [
          {
            partOfSpeech: "VRB(finiteness=inf)",
            description: "infinitief (infinitivus).",
            form: "aankomen",
            example: "aankomen",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=1)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 1e persoon. (ik ... ...)",
            form: "kom aan",
            example: "ik kom aan",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=1)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 1e persoon. (dat ik ...)",
            form: "aankom",
            example: "dat ik aankom",
          },
          {
            partOfSpeech:
              "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=2,position=bs)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 2e persoon vraag. (... jij ...?)",
            form: "kom jij aan",
            example: "kom jij aan?",
          },
          {
            partOfSpeech:
              "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=2,position=as)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 2e persoon bevestigend. (jij ... ...)",
            form: "komt aan",
            example: "jij komt aan",
          },
          {
            partOfSpeech:
              "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=2,position=as)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 2e persoon bevestigend. (dat jij ...)",
            form: "aankomt",
            example: "dat jij aankomt",
          },
          {
            partOfSpeech:
              "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=2,usage=u)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 2e persoon bevestigend u. (u ... ...)",
            form: "komt aan",
            example: "u komt aan",
          },
          {
            partOfSpeech:
              "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=2,usage=u)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 2e persoon bevestigend u. (dat u ...)",
            form: "aankomt",
            example: "dat u aankomt",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=3)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 3e persoon. (hij/zij/het ... ...)",
            form: "komt aan",
            example: "hij/zij/het komt aan",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=3)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 3e persoon. (dat hij/zij/het ...)",
            form: "aankomt",
            example: "dat hij/zij/het aankomt",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=pl,PA=1)",
            description:
              "tegenwoordige tijd (presens), meervoud, 1e persoon. (wij ... ...)",
            form: "komen aan",
            example: "wij komen aan",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=pl,PA=1)",
            description:
              "tegenwoordige tijd (presens), meervoud, 1e persoon. (dat wij ...)",
            form: "aankomen",
            example: "dat wij aankomen",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=pl,PA=2)",
            description:
              "tegenwoordige tijd (presens), meervoud, 2e persoon. (jullie ... ...)",
            form: "komen aan",
            example: "jullie komen aan",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=pl,PA=2)",
            description:
              "tegenwoordige tijd (presens), meervoud, 2e persoon. (dat jullie ...)",
            form: "aankomen",
            example: "dat jullie aankomen",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=pl,PA=3)",
            description:
              "tegenwoordige tijd (presens), meervoud, 3e persoon. (zij ... ...)",
            form: "komen aan",
            example: "zij komen aan",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=pl,PA=3)",
            description:
              "tegenwoordige tijd (presens), meervoud, 3e persoon. (dat zij ...)",
            form: "aankomen",
            example: "dat zij aankomen",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=sg,PA=1)",
            description:
              "verleden tijd (imperfectum), enkelvoud, 1e persoon. (ik ... ...)",
            form: "kwam aan",
            example: "ik kwam aan",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=sg,PA=1)",
            description:
              "verleden tijd (imperfectum), enkelvoud, 1e persoon. (dat ik ...)",
            form: "aankwam",
            example: "dat ik aankwam",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=sg,PA=2)",
            description:
              "verleden tijd (imperfectum), enkelvoud, 2e persoon. (jij ... ...)",
            form: "kwam aan",
            example: "jij kwam aan",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=sg,PA=2)",
            description:
              "verleden tijd (imperfectum), enkelvoud, 2e persoon. (dat jij ...)",
            form: "aankwam",
            example: "dat jij aankwam",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=sg,PA=3)",
            description:
              "verleden tijd (imperfectum), enkelvoud, 3e persoon. (hij/zij/het ... ...)",
            form: "kwam aan",
            example: "hij/zij/het kwam aan",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=sg,PA=3)",
            description:
              "verleden tijd (imperfectum), enkelvoud, 3e persoon. (dat hij/zij/het ...)",
            form: "aankwam",
            example: "dat hij/zij/het aankwam",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=pl,PA=1)",
            description:
              "verleden tijd (imperfectum), meervoud, 1e persoon. (wij ... ...)",
            form: "kwamen aan",
            example: "wij kwamen aan",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=pl,PA=1)",
            description:
              "verleden tijd (imperfectum), meervoud, 1e persoon. (dat wij ...)",
            form: "aankwamen",
            example: "dat wij aankwamen",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=pl,PA=2)",
            description:
              "verleden tijd (imperfectum), meervoud, 2e persoon. (jullie ... ...)",
            form: "kwamen aan",
            example: "jullie kwamen aan",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=pl,PA=2)",
            description:
              "verleden tijd (imperfectum), meervoud, 2e persoon. (dat jullie ...)",
            form: "aankwamen",
            example: "dat jullie aankwamen",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=pl,PA=3)",
            description:
              "verleden tijd (imperfectum), meervoud, 3e persoon. (zij ... ...)",
            form: "kwamen aan",
            example: "zij kwamen aan",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=past,NA=pl,PA=3)",
            description:
              "verleden tijd (imperfectum), meervoud, 3e persoon. (dat zij ...)",
            form: "aankwamen",
            example: "dat zij aankwamen",
          },
          {
            partOfSpeech: "VRB(finiteness=part,tense=pres)",
            description:
              "tegenwoordig deelwoord (participium praesentis activi).",
            form: "aankomend",
            example: "aankomend",
          },
          {
            partOfSpeech: "VRB(finiteness=part,tense=pres,infl=e)",
            description:
              "tegenwoordig deelwoord (participium praesentis activi), eindigend op -e.",
            form: "aankomende",
            example: "aankomende",
          },
          {
            partOfSpeech: "VRB(finiteness=part,tense=past)",
            description:
              "voltooid deelwoord (participium perfecti passivi). (zijn ...)",
            form: "aangekomen",
            example: "zijn aangekomen",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=imp,sep=yes)",
            description:
              "scheidbaar werkwoord, gebiedende wijs (imperatief). (... ...!)",
            form: "kom aan",
            example: "kom aan!",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=imp,usage=u,sep=yes)",
            description:
              "scheidbaar werkwoord, gebiedende wijs (imperatief) u. (... u ...!)",
            form: "komt u aan",
            example: "komt u aan!",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=conj)",
            description: "aanvoegende wijs (coniunctivus). (moge ...)",
            form: "aankome",
            example: "aankome",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=conj,sep=yes)",
            description:
              "scheidbaar werkwoord, aanvoegende wijs (coniunctivus).",
            form: "kome aan",
            example: "kome aan",
          },
        ],
        partOfSpeechType: "Werkwoord",
        description: "scheidbaar werkwoord (tmesis).",
      },
    ],
  },
];

// describe("getWord", () => {
//   test.each(testCases)(
//     'should return the correct word for "%s"',
//     async ({ input, expected }) => {
//       // call with apply
//       const result = await getWord.apply(null, input);
//       console.dir(result);
//       expect(result).toStrictEqual(expected);
//     }
//   );
// });

const testCasesLimitedByPart = [
  {
    input: [
      "opzoeken",
      "VRB",
      [
        "VRB(finiteness=fin,mood=imp)",
        "VRB(finiteness=fin,mood=imp,usage=u)",
        "VRB(finiteness=fin,mood=imp,sep=yes)",
        "VRB(finiteness=fin,mood=imp,usage=u,sep=yes)",
      ],
    ],
    expected: [
      {
        word: "opzoeken",
        forms: [
          {
            partOfSpeech: "VRB(finiteness=fin,mood=imp,sep=yes)",
            description:
              "scheidbaar werkwoord, gebiedende wijs (imperatief). (... ...!)",
            form: "zoek op",
            example: "zoek op!",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=imp,usage=u,sep=yes)",
            description:
              "scheidbaar werkwoord, gebiedende wijs (imperatief) u. (... u ...!)",
            form: "zoekt u op",
            example: "zoekt u op!",
          },
        ],
        partOfSpeechType: "Werkwoord",
        description: "scheidbaar werkwoord (tmesis).",
      },
    ],
  },
  {
    input: [
      "zoeken",
      "VRB",
      [
        "VRB(finiteness=fin,mood=imp)",
        "VRB(finiteness=fin,mood=imp,usage=u)",
        "VRB(finiteness=fin,mood=imp,sep=yes)",
        "VRB(finiteness=fin,mood=imp,usage=u,sep=yes)",
        // "VRB(finiteness=fin,mood=conj)",
        // "VRB(finiteness=fin,mood=conj,sep=yes)",
      ],
      [
        // "VRB(finiteness=fin,mood=conj)",
        // "VRB(finiteness=fin,mood=conj,sep=yes)",
      ],
    ],
    expected: [
      {
        word: "zoeken",
        forms: [
          {
            partOfSpeech: "VRB(finiteness=fin,mood=imp)",
            description: "gebiedende wijs (imperatief). (...!)",
            form: "zoek",
            example: "zoek!",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=imp,usage=u)",
            description: "gebiedende wijs (imperatief) u. (... u!)",
            form: "zoekt",
            example: "zoekt u!",
          },
        ],
        partOfSpeechType: "Werkwoord",
        description: "hoofdwerkwoord (infinitivus).",
      },
    ],
  },
  {
    input: [
      "thuiskomen",
      "VRB",
      ["VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=1)"],
      [],
    ],
    expected: [
      {
        word: "thuiskomen",
        forms: [
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=1)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 1e persoon. (ik ... ...)",
            form: "kom thuis",
            example: "ik kom thuis",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=1)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 1e persoon. (dat ik ...)",
            form: "thuiskom",
            example: "dat ik thuiskom",
          },
        ],
        partOfSpeechType: "Werkwoord",
        description: "scheidbaar werkwoord (tmesis).",
      },
    ],
  },
  {
    input: [
      "hebben",
      "VRB",
      ["VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=1)"],
      [],
    ],
    expected: [
      {
        word: "hebben",
        forms: [
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=1)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 1e persoon. (ik ...)",
            form: "heb",
            example: "ik heb",
          },
        ],
        partOfSpeechType: "Werkwoord",
        description: "hulpwerkwoord (auxilium).",
      },
    ],
  },
  {
    input: [
      "snijden",
      "VRB",
      ["VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=1)"],
      [],
    ],
    expected: [
      {
        word: "snijden",
        forms: [
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=1)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 1e persoon. (ik ... (me))",
            form: "snij",
            example: "ik snij (me)",
          },
          {
            partOfSpeech: "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=1)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 1e persoon. (ik ... (me))",
            form: "snijd",
            example: "ik snijd (me)",
          },
        ],
        partOfSpeechType: "Werkwoord",
        description: "hoofdwerkwoord (infinitivus).",
      },
    ],
  },
  {
    input: [
      "aanmelden",
      "VRB",
      ["VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=2,position=bs)"],
      [],
    ],
    expected: [
      {
        word: "aanmelden",
        forms: [
          {
            partOfSpeech:
              "VRB(finiteness=fin,mood=ind,tense=pres,NA=sg,PA=2,position=bs)",
            description:
              "tegenwoordige tijd (presens), enkelvoud, 2e persoon vraag. (... jij (je) ...?)",
            form: "meld jij (je) aan",
            example: "meld jij (je) aan?",
          },
        ],
        partOfSpeechType: "Werkwoord",
        description: "scheidbaar werkwoord (tmesis).",
      },
    ],
  },
];

describe.each(testCasesLimitedByPart)(
  "findWordForm limited by speech part",
  ({ input, expected }) => {
    test(`should return ${expected} for ${input}`, async () => {
      const result = await findWordForm.apply(null, input);
      console.log(result);
      expect(result).toEqual(expected);
    });
  }
);

describe.each(testCases)("findWordForm", ({ input, expected }) => {
  test(`should return ${expected} for ${input}`, async () => {
    const result = await findWordForm.apply(null, input);
    console.log(result);
    expect(result).toEqual(expected);
  });
});

const testCasesNouns = [
  {
    input: ["mens", "NOU-C(number=sg)"],
    expected: [
      {
        word: "mens",
        forms: [
          {
            partOfSpeech: "NOU-C(gender=n,number=sg)",
            description:
              "zelfstandig naamwoord (substantief), enkelvoud, onzijdig.",
            form: "mens",
            example: "mens",
            gender: "onzijdig",
            articles: ["het"],
          },
        ],
        description:
          "zelfstandig naamwoord (substantief), enkelvoud, onzijdig.",
        diminutiveForms: [
          {
            partOfSpeech: "NOU-C(gender=n,number=sg)",
            description:
              "zelfstandig naamwoord (substantief), enkelvoud, onzijdig.",
            form: "mensje",
            example: "mensje",
            gender: "onzijdig",
            articles: ["het"],
          },
          {
            partOfSpeech: "NOU-C(gender=n,number=pl)",
            description:
              "zelfstandig naamwoord (substantief), meervoud, onzijdig.",
            form: "mensjes",
            example: "mensjes",
            gender: "onzijdig",
            articles: ["de"],
          },
        ],
        gender: "onzijdig",
        partOfSpeechType: "Zelfstandig naamwoord",
        articles: ["het"],
      },
      {
        word: "mens",
        forms: [
          {
            partOfSpeech: "NOU-C(gender=m,number=sg)",
            description:
              "zelfstandig naamwoord (substantief), enkelvoud, mannelijk.",
            form: "mens",
            example: "mens",
            gender: "mannelijk",
            articles: ["de"],
          },
          {
            partOfSpeech: "NOU-C(gender=m,number=pl)",
            description:
              "zelfstandig naamwoord (substantief), meervoud, mannelijk.",
            form: "mensen",
            example: "mensen",
            gender: "mannelijk",
            articles: ["de"],
          },
        ],
        description:
          "zelfstandig naamwoord (substantief), enkelvoud, mannelijk.",
        diminutiveForms: [
          {
            partOfSpeech: "NOU-C(gender=m,number=sg)",
            description:
              "zelfstandig naamwoord (substantief), enkelvoud, mannelijk.",
            form: "mensje",
            example: "mensje",
            gender: "mannelijk",
            articles: ["het"],
          },
          {
            partOfSpeech: "NOU-C(gender=m,number=pl)",
            description:
              "zelfstandig naamwoord (substantief), meervoud, mannelijk.",
            form: "mensjes",
            example: "mensjes",
            gender: "mannelijk",
            articles: ["de"],
          },
        ],
        gender: "mannelijk",
        partOfSpeechType: "Zelfstandig naamwoord",
        articles: ["de"],
      },
    ],
  },
  {
    input: ["rooster", "NOU-C(number=sg)"],
    expected: [
      {
        word: "rooster",
        forms: [
          {
            partOfSpeech: "NOU-C(gender=m/n,number=sg)",
            description:
              "zelfstandig naamwoord (substantief), enkelvoud, mannelijk/onzijdig.",
            form: "rooster",
            example: "rooster",
            gender: "mannelijk/onzijdig",
            articles: ["het", "de"],
          },
          {
            partOfSpeech: "NOU-C(gender=m/n,number=pl)",
            description:
              "zelfstandig naamwoord (substantief), meervoud, mannelijk/onzijdig.",
            form: "roosters",
            example: "roosters",
            gender: "mannelijk/onzijdig",
            articles: ["de"],
          },
        ],
        description:
          "zelfstandig naamwoord (substantief), enkelvoud, mannelijk/onzijdig.",
        diminutiveForms: [
          {
            partOfSpeech: "NOU-C(gender=m/n,number=sg)",
            description:
              "zelfstandig naamwoord (substantief), enkelvoud, mannelijk/onzijdig.",
            form: "roostertje",
            example: "roostertje",
            gender: "mannelijk/onzijdig",
            articles: ["het"],
          },
          {
            partOfSpeech: "NOU-C(gender=m/n,number=pl)",
            description:
              "zelfstandig naamwoord (substantief), meervoud, mannelijk/onzijdig.",
            form: "roostertjes",
            example: "roostertjes",
            gender: "mannelijk/onzijdig",
            articles: ["de"],
          },
        ],
        partOfSpeechType: "Zelfstandig naamwoord",
        gender: "mannelijk/onzijdig",
        articles: ["het", "de"],
      },
    ],
  },
];

describe.each(testCasesNouns)("findWordForm nouns", ({ input, expected }) => {
  test(`should return ${expected} for ${input}`, async () => {
    const result = await findWordForm.apply(null, input);
    console.log(result);
    expect(result).toEqual(expected);
  });
});
