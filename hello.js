var tts = require("node-tts-google").tts;

require('http').createServer(function (req, res) {

	if (req.method === "POST") {
		req.on('data', function (chunk) {
	        // pipe request body to speaker
	        str = chunk.slice(5);
	        tts.speak(str, 'en');
    	});
	}

	res.writeHead(200, "OK", {'Content-Type': 'text/html'});
	res.write('<html><head><title>Resin.io Text2Speech</title></head><body style="text-align:center;">');
	res.write('<h1>Resin.io Text2Speech</h1>');
	res.write('<form enctype="application/x-www-form-urlencoded" action="/" method="post">');
	res.write('<input type="text" name="text" value="" placeholder="Speak this text"/><br /><br />');
	res.write('<input type="submit" />');
	res.write('</form></body></html');
	res.end();

}).listen(8080);