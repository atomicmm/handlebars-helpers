const moment = require('moment');
const isString = require('lodash/isString');

const DEFAULT_FORMAT = 'Y-MM-DD HH:mm:ss';

module.exports = {

    /**
     * {{formatData}}
     * Port of formatDate-js library (http://bit.ly/18eo2xw)
     * @param  {[type]} date   [description]
     * @param  {[type]} format [description]
     * @return {[type]}        [description]
     */
    formatDate: (date, format, options) => {
        return moment(date).format(isString(format) ? format : DEFAULT_FORMAT)
    },

    /**
     * {{now}}
     * @param  {[type]} format [description]
     * @return {[type]}        [description]
     */
    now: format => moment().format(isString(format) ? format : DEFAULT_FORMAT),


    /**
     * {{nowBetween begin end}}
     * @return {boolean}        [description]
     */
    ifNowBetween: (begin, end, options) => {
        if (moment().isBeTween(begin, end)) return options.fn(this);
        else return options.inverse(this);
    }
}
