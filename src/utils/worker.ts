import runCrawlerAmazon from "./crawlers/amazon";

console.log('Worker start')


const runAmazonCrawler = (resolve) => {
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

const setTimeoutAmazonCrawler = async(timeout) => {
  return new Promise((resolve, error) => {
    setTimeout(runAmazonCrawler, timeout, resolve);
    // setTimeout(runCrawlerAmazon, timeout, resolve);
  });
}

const saveToDb = async(data) => {

}

const alarmMinutesOfTheDay =228;



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

