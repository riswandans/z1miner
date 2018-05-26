const parameter = process.argv;
const https = require('https');
const querystring = require('querystring');  

var postData = querystring.stringify({
    'secret' : parameter[3]
});

var options = {
  hostname: 'api.coinhive.com',
  port: 443,
  path: '/stats/site',
  method: 'POST',
  headers: {
       'Content-Type': 'application/x-www-form-urlencoded',
       'Content-Length': postData.length
     }
};


exports.monitoring = function(i) {
    setTimeout(() => {
        var req = https.request(options, (res) => {
          var body = '';
            res.on('data', function(data){
                body = body + data;
            });
            
            res.on('end', function() {
                var parsed = {};  
                try{
                    parsed = JSON.parse(body);
                }
                catch(er){
                }
                var hashpersec = parsed.hashesPerSecond.toFixed(0);
                if(hashpersec == "0") {
                }else{
                    hashpersec = (hashpersec * 12);
                    console.log('[' + parameter[4] + ' threads] Mining on ' + parsed.name + ' => ' + hashpersec + ' Hashes | Total: ' + parsed.hashesTotal + ' | XMR: ' + parsed.xmrPending);
                }
                });
          
        });
        req.on('error', (e) => {
          console.error(e);
        });
        req.write(postData, function(err) { req.end(); });
        this.monitoring(++i);
    }, 12000)
}