const parameter = process.argv;
const os = require("os");
const cpu = os.cpus();

exports.main = function() {
    console.log('[Information] z1miner started, running on ' + parameter[4] + ' threads')
    console.log('[Information] CPU: ' + cpu[0].model + ' (' + os.cpus().length + ' cores)');
    console.log('[Information] Waiting response from https://api.coinhive.com');
    console.log('');
}