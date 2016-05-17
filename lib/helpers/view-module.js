const isEmpty = require('lodash/isEmpty');
const toPairs = require('lodash/toPairs');

module.exports = {
    exposePager: function(req, pageKey, options) {
        let query = req.query;
        let basePath = req.path;
        delete query[pageKey];

        let params = isEmpty(query) ? '' : '&' + toPairs(query)
            .map(item => item.join('='))
            .reduce((prev, current) => `${prev}&${current}`);

        return options.fn({
            params, basePath
        });
    }
}
