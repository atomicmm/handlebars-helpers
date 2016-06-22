const isInteger = require('lodash/isInteger');

module.exports = {

    toFixed(number, precision, options) {
        if (!isInteger(precision)) {
            precision = 2;
        }
        return number.toFixed(precision);
    }
}
