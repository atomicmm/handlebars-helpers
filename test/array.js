const assert = require('chai').assert;
const handlebars = require('handlebars')

const helpers = require('../lib/exporter');

describe('Array Test', () => {
    handlebars.registerHelper(helpers);

    it('join', () => {
        const tmpl = handlebars.compile('{{join array}}')
        const tmpl2 = handlebars.compile(`{{join array2 '-'}}`)
        const context = {
            array: [1, 2, 3, 4, 5],
            array2: ['a', 'b', 'c']
        }
        assert.equal('1,2,3,4,5',tmpl(context));
        assert.equal('a-b-c',tmpl2(context));
    });
});
