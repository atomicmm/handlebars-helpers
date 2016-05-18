const moment = require('moment');

module.exports = {
    /**
     * {{formatData}}
     * Port of formatDate-js library (http://bit.ly/18eo2xw)
     * @param  {[type]} date   [description]
     * @param  {[type]} format [description]
     * @return {[type]}        [description]
     */
    formatDate: (date, format) => moment(date).format(format),

    /**
     * {{now}}
     * @param  {[type]} format [description]
     * @return {[type]}        [description]
     */
    now: format => moment().format(format),


    /**
     * {{nowBetween begin end}}
     * @return {boolean}        [description]
     */
    ifNowBetween: (begin, end, options) => {
        if (moment().isBeTween(begin, end)) return options.fn(this);
        else return options.inverse(this);
    }
}
