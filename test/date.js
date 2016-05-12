const assert = require('chai').assert;

const helpers = require('../lib/exporter');

describe('Main Test', () => {
    describe('#date', () => {
        it('', () => {
            const now = new Date();
            console.log(helpers.formatDate(now,'YYYY-MM-DD'));
            console.log(helpers.now('YYYY-MM-DD'));
        });
    });
});
