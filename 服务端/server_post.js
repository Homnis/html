var http = require('http');
var querystring = require('querystring');
 
http.createServer(function (req, res) {
  var body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    // 解析参数
    body = querystring.parse(body);
	console.log(body);
	res.writeHead(200,{'Access-Control-Allow-Origin':'*'});
	res.write(JSON.stringify(body));
	res.write("\n");
	res.end();
  });
  
}).listen(3000);
console.log('POST服务启动了')