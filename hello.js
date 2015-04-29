var tts = require("node-tts-google").tts;

require('http').createServer(function (req, res) {

    req.on('data', function (chunk) {
        // pipe request body to speaker
        tts.speak(chunk, 'en');
    });

    req.on('end', function () {
        // close connection
        res.end();
    });

	// console.log(req.query)
}).listen(8080);
