
// RECIEVES A DATE FORMAT YYYY-MM-DD AND RETURNS A MORE CONTEXTUALIZED FORMAT, IE: X OF JUNE OF 20XX
export function dateParser(date) {
    if (!date) return ""
    const moment = require('moment');
    let esLocale = require('moment/locale/es');
    var momentLocale = moment(date).locale('es', esLocale);
    return momentLocale.format("LL")
}

// RECIEVES A SATR DATE FORMAT YYYY-MM-DD AND AN POSITIVE INTEGER
// RETURNS AN INTEGER STATING HOW MUCH TIME IN BUSSINES DAYS IS LEFT FOR THE startDate AND time + startDate TO BE EQUAL
export function dateParser_timeLeft(startDate, time) {
    if (!startDate && !time) return ""
    var moment = require('moment');
    var momentB = require('moment-business-days');
    const holydays = require("../../jsons/holydaysmoment.json")
    momentB.updateLocale(holydays);
    let today = moment().format('YYYY-MM-DD');
    let endate = momentB(startDate, 'YYYY-MM-DD').businessAdd(time)._d;
    let diff = momentB(endate).businessDiff(moment(today), true);
    return diff;
}

// RECIEVES A SATR DATE FORMAT YYYY-MM-DD AND AN POSITIVE INTEGER
// RETURNS A DATE THAT IS EUQAL TO THE STARTING DATE PLUS THE NUMBER OF time ADDED AS BUSINESS DAYS
export function dateParser_finalDate(startDate, time) {
    if (!startDate || !time) return ""
    var momentB = require('moment-business-days');
    var moment = require('moment');
    const holydays = require("../../jsons/holydaysmoment.json")
    momentB.updateLocale('us', holydays);
    let endate = momentB(startDate, 'YYYY-MM-DD').businessAdd(time)._d;
    return moment(endate).format('YYYY-MM-DD');
}

// RECIEVES TWO DATES FORMAT YYYY-MM-DD
// RETURN THE DIFFERENCE IN BUSINESS DAYS BETWEEN THE TWO DATES
export function dateParser_dateDiff(dateA, dateB) {
    if (!dateA || !dateB) return ""
    var momentB = require('moment-business-days');
    var moment = require('moment');
    const holydays = require("../../jsons/holydaysmoment.json")
    momentB.updateLocale(holydays);
    var diff = momentB(dateA, 'YYYY-MM-DD').businessDiff(moment(dateB, 'YYYY-MM-DD'))
    return diff;
}

// RECIEVES A DATE FORMAT YYYY-MM-DD
// RETURNS AN INTEGER STATING THE NUMBERS OF BUSSINESS DAYS THAT HAS PASSED SINCE THAT DATE AND TODAY
export function dateParser_timePassed(date) {
    var momentB = require('moment-business-days');
    var moment = require('moment');
    const holydays = require("../../jsons/holydaysmoment.json")
    momentB.updateLocale(holydays);
    const today = moment().format('YYYY-MM-DD');
    var diff = momentB(date, 'YYYY-MM-DD').businessDiff(moment(today, 'YYYY-MM-DD'))
    return diff;
}

// RECIEVES A DATE FORMAT YYYY-MM-DD
// RETURNS AN INTEGER STATING THE NUMBERS OF YEARS THAT HAS PASSED SINCE THAT DATE AND TODAY
export function dateParser_yearsPassed(date) {
    var moment = require('moment');
    const today = moment().format('YYYY-MM-DD');
    var diff = moment(today, 'YYYY-MM-DD').diff(date, 'years');
    return diff;
}
