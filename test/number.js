const assert = require('chai').assert;
const handlebars = require('handlebars')

const helpers = require('../lib/exporter');

describe('Number Test', () => {
    handlebars.registerHelper(helpers);

    it('toFixed', () => {
        const tmpl = handlebars.compile('{{toFixed number }}')
        const tmpl2 = handlebars.compile('{{toFixed number 3}}')
        const context = {
            number: 3.1415926
        }
        assert.equal('3.14', tmpl(context));
        assert.equal('3.142', tmpl2(context));
    });
});
