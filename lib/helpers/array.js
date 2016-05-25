const isUndefined = require('lodash/isUndefined');
const isString = require('lodash/isString');
const isArray = require('lodash/isArray');

module.exports = {
    join(array, sep) {
        if(isUndefined(array) || !isArray(array)) return '';
        let _sep = isString(sep)?sep:',';

        return array.join(_sep);
    }
}
