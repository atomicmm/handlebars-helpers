const assert = require('chai').assert;
const handlebars = require('handlebars')

const helpers = require('../lib/exporter');

describe('Main Test', () => {
    handlebars.registerHelper(helpers);

    describe('#date', () => {
        it('', () => {
            const context = {
                now: new Date()
            };
            const tmpDate = handlebars.compile('{{formatDate date}}');
            const tmpDate1 = handlebars.compile('{{now}}');
            console.log(tmpDate(context))
            console.log(tmpDate1(context))
        });
    });
});
