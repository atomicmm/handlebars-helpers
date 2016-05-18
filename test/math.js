const assert = require('chai').assert;
const handlebars = require('handlebars')

const helpers = require('../lib/exporter');

describe('Main Test', () => {
    handlebars.registerHelper(helpers);
    describe('#math', () => {
        it('',()=>{
            const tmpSum = handlebars.compile('{{sum 1 2 3 4 5}}')
            const tmpAvg = handlebars.compile('{{avg 1 2 3 4 5}}')
            assert.equal(tmpSum(),'15');
            assert.equal(tmpAvg(),'3');
        });
    });
});
