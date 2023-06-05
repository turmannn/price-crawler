import { chromium, devices } from 'playwright-chromium';
// import assert from 'node:assert';


const runCrawlerAmazon = async() => {
  console.log('about to start browser')
  // Setup
  const browser = await chromium.launch({headless: false});
  // const context = await browser.newContext(devices['iPhone 11']);
  const addr = 'https://amazon.com'
  const context = await browser.newContext({
    baseURL: 'addr'
  });
  const page = await context.newPage();

  // The actual interesting bit
  // await context.route('**.jpg', route => route.abort());

  console.log('about to visit site: ', addr)
  await page.goto(addr);
  const loc = page.locator('#nav-global-location-popover-link')
  console.log('finished visiting site', await loc.allInnerTexts())

  // assert(await page.title() === 'Example Domain'); // 👎 not a Web First assertion

  // Teardown
  await context.close();
  await browser.close();
  // resolve('browser done')
}

export default runCrawlerAmazon;