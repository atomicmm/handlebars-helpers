const isNumber = require('lodash/isNumber')
const sum = require('lodash/sum')
const mean = require('lodash/mean')

module.exports = {

    /**
     * Return the product of `a` plus `b`.
     *
     * @param {Number} `a`
     * @param {Number} `b`
     * @api public
     */
    add(a, b) {
        return a + b;
    },

    /**
     * Return the product of `a` minus `b`.
     *
     * @param {Number} a
     * @api public
     */
    subtract(a, b) {
        return a - b;
    },

    /**
     * Divide `a` by `b`
     *
     * @param {Number} `a` numerator
     * @param {Number} `b` denominator
     * @api public
     */
    divide(a, b) {
        return a / b;
    },

    /**
     * Multiply `a` by `b`.
     *
     * @param {Number} `a` factor
     * @param {Number} `b` multiplier
     * @api public
     */
    multiply(a, b) {
        return a * b;
    },

    /**
     * Get the `Math.floor()` of the given value.
     *
     * @param {Number} `value`
     * @api public
     */
    floor(value) {
        return Math.floor(value);
    },

    /**
     * Get the `Math.ceil()` of the given value.
     *
     * @param {Number} `value`
     * @api public
     */
    ceil(value) {
        return Math.ceil(value);
    },

    /**
     * Round the given value.
     *
     * @param {Number} `value`
     * @api public
     */
    round(value) {
        return Math.round(value);
    },

    /**
     * Returns the sum of all numbers in the given array.
     *
     * ```handlebars
     * {{sum "[1, 2, 3, 4, 5]"}}
     * //=> '15'
     * ```
     *
     * @name .sum
     * @param {Array} `array` Array of numbers to add up.
     * @return {Number}
     * @api public
     */
    sum(...numbers) {
        return sum(numbers.filter(isNumber))
    },

    /**
     * Returns the average of all numbers in the given array.
     *
     * ```handlebars
     * {{avg "[1, 2, 3, 4, 5]"}}
     * //=> '3'
     * ```
     *
     * @name .avg
     * @param {Array} `array` Array of numbers to add up.
     * @return {Number}
     * @api public
     */
    avg(...numbers) {
        return mean(numbers.filter(isNumber))
    },
}
