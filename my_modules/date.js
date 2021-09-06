const moment = require('moment-timezone');

moment.locale('fr');

const date = {
    getCurrentDateByTz : (timezone) => {
        const now = moment();

        const nowTz = now.tz(timezone);

        const formattedDate = nowTz.format('dddd Do MMMM YYYY, h:mm:ss a');
        return formattedDate;
    },
};

module.exports = date;

