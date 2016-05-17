const truncate = require('html-truncate');

module.exports = {
    truncateHtml: function(html, length) {

        return truncate(html, length, {
            keepImageTag: true
        });
    }
}
