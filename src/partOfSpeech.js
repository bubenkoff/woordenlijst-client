// const fs = require("fs");
// const path = require("path");
// const csv = require("csv-parser");
// const { createObjectCsvWriter } = require("csv-writer");
// const { findWordForm } = require("./index.js");
// const pLimit = require("p-limit");
import fs from "fs";
import path from "path";
import csv from "csv-parser";
import { createObjectCsvWriter } from "csv-writer";
import { findWordForm } from "./index.js";
import pLimit from "p-limit";

const limit = pLimit(5);

// Custom async function to determine the part of speech
async function getPartOfSpeech(word) {
  // Simulate an async operation (e.g., API call)
  if (!word) return "";
  const wordForm = await findWordForm(word);
  return wordForm ? wordForm[0]?.partOfSpeechType : "";
}

// Get input file path from command-line arguments
const inputFilePath = process.argv[2];
if (!inputFilePath) {
  console.error("Please provide the input file path as an argument.");
  process.exit(1);
}

// Generate output file path
const outputFilePath = path.join(
  path.dirname(inputFilePath),
  `${path.basename(
    inputFilePath,
    path.extname(inputFilePath)
  )}_output${path.extname(inputFilePath)}`
);

// Read the CSV file
const results = [];
fs.createReadStream(inputFilePath)
  .pipe(csv({}))
  .on("data", (data) => {
    results.push(data);
  })
  .on("end", async () => {
    // Add the "Woordsoort" column, in parallel with limited concurrency to 10 requests at a time
    await Promise.all(
      results.map((result) =>
        limit(async () => {
          if (!result["Woordsoort"]) {
            const partOfSpeech = await getPartOfSpeech(
              result["Nederlands woord"]
            );
            result["Handmatig woordsoort"] = partOfSpeech;
          }
        })
      )
    );

    // Write the updated data to a new CSV file
    const csvWriter = createObjectCsvWriter({
      path: outputFilePath,
      header: [
        { id: "Nederlands woord", title: "Nederlands woord" },
        { id: "Engelse vertaling", title: "Engelse vertaling" },
        { id: "Woordsoort", title: "Woordsoort" },
        { id: "Handmatig woordsoort", title: "Handmatig woordsoort" },
      ],
    });

    await csvWriter.writeRecords(results);
    console.log(`CSV file has been updated and saved as ${outputFilePath}`);
  });
