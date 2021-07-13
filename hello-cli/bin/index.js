#!/usr/bin/env node

const yargs = require("yargs");
const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");

const options = yargs.usage("Usage: -n <name>").option("n", {
  alias: "name",
  describe: "Your name",
  type: "string",
  demandOption: true,
}).argv;

// hello -n to run
// use this to input argument in terminal
// console.log(options.name);

// declare var for the file path
const pokemonToSearch = path.resolve("bin/input.txt");

// read what is in the filepath that i saved above
fs.readFile(pokemonToSearch, "utf-8", function (err, pokemonToSearchContent) {
  // store pokemon in the input.txt into this array after looping
  const pokemonFileArray = [];

  if (err) {
    console.log(err);
  } else {
    let pokemonSplitList = pokemonToSearchContent.split("\n");
    for (let pokemon of pokemonSplitList) {
      pokemonFileArray.push(pokemon);
    }

    fetch("https://pokeapi.co/api/v2/pokemon/");
  }
});
