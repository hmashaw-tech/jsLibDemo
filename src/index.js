/**
 * Copyright (c) 2018
 * This code is licensed under the MIT license.
 * See the LICENSE file in the project root for license terms.
 */

/* eslint func-style: ["error", "declaration"] */
/* eslint-disable sort-keys */

var uniqueRandomArray = require('unique-random-array')
var starWarsNames = require('./starwars-names.json')

/**
 * A Code Coverage demostration.
 * See "nyc" in package.json
 * @returns {boolean} Just because.
 */
function codeCoverageDemo () {

    return true

}

module.exports = {
    names: starWarsNames,
    random: uniqueRandomArray(starWarsNames),
    ccd: codeCoverageDemo
}
