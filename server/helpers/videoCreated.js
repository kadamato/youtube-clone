import moment from "moment-timezone";

// current time - created video time = about way is

const LIMIT_SECONDS = 60000; // < 60s

const LIMIT_MINUTES = 3600000; // <  60m

const LIMIT_HOURS = 86400000; // < 24h

const LIMIT_DAYS

    = daysInMonth() * 24 * 60 * 60 * 1000; // < 19, 28 30 or 31 days (*)

const LIMIT_MONTHS = daysInYear() * 24 * 60 * 60 * 1000; //< 12 months

function convertToMilliseconds(time, country) {
    const convertTimeByCountry = moment.tz(time, country);
    let initialTimeVideo = moment(convertTimeByCountry).valueOf();
    return initialTimeVideo;
}

function daysInMonth() {
    const currentTime = moment().format("YYYY/MM");
    const days = moment(currentTime, "YYYY/MM").daysInMonth();

    return days;
}

function daysInYear() {
    const currentYear = moment().year();
    const leapYear = moment([currentYear]).isLeapYear();
    const days = leapYear ? 366 : 365;
    return days;
}

function months() {
    const currentYear = moment().year();
    const leapYear = moment([currentYear]).isLeapYear();

    return [31, leapYear ? 29 : 28, 31, 30, 31, 30, 31, 30, 30, 31, 30, 31];
}

function convertToCompleteTime(timePassed) {

    let convertedTime = {
        time: null,
        description: null
    };

    if (timePassed < LIMIT_SECONDS) {
        convertedTime = {
            time: `${timePassed / 1000}`,
            description: "second"
        }
    } else if (timePassed < LIMIT_MINUTES) {
        convertedTime = {
            time: `${timePassed / 1000 / 60}`,
            description: "minute"
        }
    } else if (timePassed < LIMIT_HOURS) {
        convertedTime = {
            time: `${timePassed / 1000 / 60 / 60} `,
            description: "hour"
        }
    } else if (timePassed < LIMIT_DAYS) {

        convertedTime = {
            time: `${timePassed / 1000 / 60 / 60 / 24} `,
            description: "day"
        }
    } else if (timePassed < LIMIT_MONTHS) {
        convertedTime = {
            time: `${timePassed / 1000 / 60 / 60 / 24 / daysInMonth()} `,
            description: "month"
        }
    } else {
        convertedTime = {
            time: `${timePassed / 1000 / 60 / 60 / 24 / daysInYear()}`,
            description: "year"
        }
    }

    const completeTime = Math.floor(convertedTime.time);

    const completeDescription = completeTime > 1 ? `${convertedTime.description}s` : convertedTime.description;

    return `${completeTime} ${completeDescription} ago`;


}

const videoCreatedAbout = (time) => {
    const initialTimeVideo = convertToMilliseconds(time, "Asia/Ho_Chi_Minh");

    const currentTime = Date.now();

    const timePassed = currentTime - initialTimeVideo;

    return convertToCompleteTime(timePassed);
};

// timeCreatedVideo("2023-03-02T04:22:37.355Z");

export default videoCreatedAbout;
