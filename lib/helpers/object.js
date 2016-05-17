const get = require('lodash/get');

module.exports = {

    getValue: function(obj, path, defaultValue) {
        return get(obj,path,defaultValue);
    }
}
