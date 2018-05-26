const api = require("./api.js");
const app = require("./app.js");
const browser = require("./browser.js");
const server = require("./server.js");

app.main();
server.run();
api.monitoring(0);
browser.run();