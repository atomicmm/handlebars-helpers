const assert = require('chai').assert;
const handlebars = require('handlebars')

const helpers = require('../lib/exporter');

describe('Main Test', () => {
    handlebars.registerHelper(helpers);

    describe('#date', () => {
        it('format', () => {
            const context = {
                now: new Date()
            };
            const tmpDate = handlebars.compile('{{formatDate date}}');
            const tmpDate1 = handlebars.compile('{{now}}');
            console.log(tmpDate(context))
            console.log(tmpDate1(context))
        });
        it('nowBetween', () => {
            const begin ='1753-01-01T00:00:00';
            const end ='1753-01-01T00:00:00';
            const tmpl = handlebars.compile('{{#ifNowBetween begin end}}A{{/ifNowBetween}}')

            console.log(tmpl())
        });
        it('addDate',() =>{
            const tmpl = handlebars.compile('{{addDateFromNow 7 "days"}}')

            console.log(tmpl())
        });
    });
});
