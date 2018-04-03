/**
 * Copyright (c) 2018
 * This code is licensed under the MIT license.
 * See the LICENSE file in the project root for license terms.
 */

/* eslint-env mocha */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint func-style: ["error", "declaration"] */

const {expect} = require('chai')

const starWarsNames = require('../src/index')
const minListSize = 1
const NOT_FOUND = -1

/**
 * Checks that each array element is a string.
 * @param {array} array The array to be checked.
 * @returns {boolean} All the members of an array pass the specified test.
 */
function isArrayOfString (array) {

    return array.every((item) => typeof item === 'string')

}


describe('starwars-names', () => {

    it('should return an array of all available names', () => {

        expect(starWarsNames.names.length).to.be.greaterThan(minListSize)
        expect(isArrayOfString(starWarsNames.names)).to.be.true

    })


    it('should return a single random name from all available names', () => {

        const randomName = starWarsNames.random()

        expect(randomName).to.satisfies((name) => starWarsNames.names.indexOf(name) !== NOT_FOUND)

    })


    it('completes code coverage requirement', () => {

        const ccd = starWarsNames.ccd()

        expect(ccd).to.be.true

    })

})

