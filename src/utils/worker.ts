// import runCrawlerAmazon from "./crawlers/amazon";
// const runCrawlerAmazon = require("./crawlers/amazon");
// const fs = require('fs');
console.log(3333, process.cwd());
// console.log(33334, fs.readdirSync('.'));
import runCrawlerAmazon from "./crawlers/amazon"
// const runCrawlerAmazon = require("./src/utils/crawlers/amazon");
// const { abra } = require("./file.ts")
console.log('Worker start')

// console.log(4444, abra())

const runAmazonCrawler = (resolve: any) => {
  console.log(`crawler work start: ${new Date().toISOString()}`);
  let counter = 0;
  // while (counter < 900000000) {
  while (counter < 90) {
    const dateNow = new Date();
    dateNow.toDateString
    console.log(counter)
    counter ++;
  }
  console.log(`crawler work end: ${new Date().toISOString()}`);
  resolve('done')
}

// type Tresolve = typeof Promise.resolve

const setTimeoutAmazonCrawler = async(timeout: any) => {
  return new Promise((resolve, error) => {
    // setTimeout(runAmazonCrawler, timeout, resolve);
    setTimeout(async (resolve) => {
      await runCrawlerAmazon()
      resolve('done')
    }, timeout, resolve);
  });
}

const saveToDb = async() => {

}

const Alarm = () => {
  return {
    set: (hours: number, minutes: number = 0) => {
      if ( [hours, minutes].every(val => val === 0)) throw new Error('hours nor minutes are not set');
      if (0 > hours && hours > 24) throw new Error('invalid value for hours');
      if (0 > minutes && minutes > 60) throw new Error('invalid value for minutes');
      return hours * 60 + minutes;
    }
  }
}

const alarmMinutesOfTheDay = Alarm().set(4, 11);



console.log('root start');
(async () => {
  console.log('start');
  while (true) {
    const curTime = new Date();
    console.log('current time: ', curTime);
    const minutesOfTheDay = curTime.getUTCHours()*60+curTime.getUTCMinutes();
    console.log('minutes of the day: ', minutesOfTheDay)

    const alarmOffsetMinutes = minutesOfTheDay <= alarmMinutesOfTheDay ?
      alarmMinutesOfTheDay - minutesOfTheDay :
      24 * 60 + alarmMinutesOfTheDay - minutesOfTheDay


    // const curAlarmOffsetMinutes = (24 - alarm) * 60 - minutesOfTheDay;
    // const timeoutMinutes = curAlarmOffsetMinutes > 0 ?
    //   curAlarmOffsetMinutes :
    //   24 * 60 + curAlarmOffsetMinutes;

    const hoursLeft = Math.floor(alarmOffsetMinutes/60)
    const minutesLeft = alarmOffsetMinutes-(hoursLeft*60)
    console.log(
      `Will start crawler in ${hoursLeft} hours and ${minutesLeft} minutes. ` +
      `${hoursLeft ? `(${alarmOffsetMinutes} minutes)` : ''}`
    );
    await setTimeoutAmazonCrawler(alarmOffsetMinutes * 60 * 1000);
    const pauseMinutes = 1;
    console.log(`pause for ${pauseMinutes} monuntes before next iteratoin`);
    await new Promise(resolve => {setTimeout(() => {resolve('done')}, pauseMinutes * 60000)});
  }
})()

