/**
 * Created by alucas on 17/11/16.
 */
var uniqueRandomArray = require('unique-random-array');

var starWarsNames = require('./starwars-name.json');

module.exports = {
    all: starWarsNames,
    random: uniqueRandomArray(starWarsNames),
}