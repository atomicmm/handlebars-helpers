const assert = require('chai').assert;

const helpers = require('../lib/exporter');

describe('Main Test', () => {
    describe('#string', () => {
        it('', () => {
            const testStr = 'today is sunday';
            assert.equal('Today is sunday', helpers.capitalizeFirst(testStr));
            assert.equal('Today Is Sunday', helpers.capitalizeEach(testStr));
        });
    });
});
