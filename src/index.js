/**
 * Copyright (c) 2018
 * This code is licensed under the MIT license.
 * See the LICENSE file in the project root for license terms.
 */

/* eslint func-style: ["error", "declaration"] */
/* eslint-disable sort-keys */

const uniqueRandomArray = require('unique-random-array')
const kidsNames = require('./kids-names.json')

/**
 * A Code Coverage demostration.
 * See "nyc" in package.json
 * @returns {boolean} Just because.
 */
function codeCoverageDemo () {

    return true

}

const publicAPI = {
    allKids: kidsNames,
    oneKid: uniqueRandomArray(kidsNames),
    ccd: codeCoverageDemo
}

module.exports = publicAPI
