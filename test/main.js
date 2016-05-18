const assert = require('chai').assert;
const handlebars = require('handlebars')

const helpers = require('../lib/exporter');

describe('Main Test', () => {
    describe('#string', () => {
        it('', () => {
            const testStr = 'today is sunday';
            assert.equal('Today is sunday', helpers.capitalizeFirst(testStr));
            assert.equal('Today Is Sunday', helpers.capitalizeEach(testStr));
        });
        it('',()=>{
            const context = {array :[{name:'foo'},{name:'bar'},{name:'baz'}]};
            const tmpRow = handlebars.compile('{{#each array as |row index|}}{{row.name}}{{/each}}');
            const tmpIndex = handlebars.compile('{{#each array as |row index|}}{{index}}{{/each}}');
            assert.equal(tmpRow(context),'foobarbaz');
            assert.equal(tmpIndex(context),'012');
        });
    });
});
