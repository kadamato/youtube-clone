import moment from "moment-timezone";

// current time - created video time = about way is

const LIMIT_SECONDS = 60000; // < 60s

const LIMIT_MINUTES = 3600000; // <  60m

const LIMIT_HOURS = 86400000; // < 24h

const LIMIT_DAYS = daysInMonth() * 24 * 60 * 60 * 1000; // < 19, 28 30 or 31 days (*)

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

function timeEncode(timePassed) {
  let encodedTime = 0;

  if (timePassed < LIMIT_SECONDS) {
    encodedTime = `${timePassed / 1000} second ago`;
  } else if (timePassed < LIMIT_MINUTES) {
    encodedTime = `${timePassed / 1000 / 60} minute ago`;
  } else if (timePassed < LIMIT_HOURS) {
    encodedTime = `${timePassed / 1000 / 60 / 60} hour ago`;
  } else if (timePassed < LIMIT_DAYS) {
    encodedTime = `${timePassed / 1000 / 60 / 60 / 24} day ago`;
  } else if (timePassed < LIMIT_MONTHS) {
    encodedTime = `${
      timePassed / 1000 / 60 / 60 / 24 / daysInMonth()
    }  month ago`;
  } else {
    encodedTime = `${timePassed / 1000 / 60 / 60 / 24 / daysInYear()} year ago`;
  }

  const splitTime = encodedTime.split(" ");
  const roundTheTime = Math.floor(splitTime[0]);
  const completeTime = `${roundTheTime} ${
    roundTheTime > 1 ? splitTime[1] + "s" : splitTime[1]
  } ${splitTime[2]}`;

  return completeTime;
}

const videoCreatedAbout = (time) => {
  const initialTimeVideo = convertToMilliseconds(time, "Asia/Ho_Chi_Minh");

  const currentTime = Date.now();

  const timePassed = currentTime - initialTimeVideo;

  return timeEncode(timePassed);
};

// timeCreatedVideo("2023-03-02T04:22:37.355Z");

export default videoCreatedAbout;
