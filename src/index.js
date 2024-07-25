const starWarsNames = require("./starwars-names.json");
const uniqueRandomArray = import('unique-random-array') ;

module.exports = {
  all: starWarsNames,
  random: uniqueRandomArray(StartWarName),
};
