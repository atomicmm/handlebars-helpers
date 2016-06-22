const strings = require('./helpers/string');
const collections = require('./helpers/collections');
const dates = require('./helpers/dates');
const comparisons = require('./helpers/comparisons');
const object = require('./helpers/object');
const html = require('./helpers/html');
const math = require('./helpers/math');
const viewModule = require('./helpers/view-module');
const array = require('./helpers/array');
const number = require('./helpers/number');

module.exports = exports = Object.assign({}, strings, collections, dates, comparisons, object, html, viewModule, math, array, number);
