const puppeteer = require('puppeteer');

exports.run = function() {
    async function run() {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('http://127.0.0.1:8081/');
    }
    run();
}