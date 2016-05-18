const get = require('lodash/get');
const isNumber = require('lodash/isNumber');

module.exports = {

    getValue(obj, path, defaultValue) {
        return get(obj, path, defaultValue);
    },
    stringify(obj, indent) {
        if (!isNumber(indent)) {
            indent = 0;
        }

        return JSON.stringify(obj, null, indent);
    }

}
