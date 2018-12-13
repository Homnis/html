var http = require('http');
var url = require('url');
var util = require('util');
http.createServer(function(req,res){
	console.log('收到请求')
	var params = url.parse(req.url, true).query;
	console.log(params);
	res.writeHead(200,{'Access-Control-Allow-Origin':'*'});
	// res.write("<h1>"+ JSON.stringify(params)+ "</h1>" );
	res.write("<b>"+JSON.stringify(params)+"</b>");
    res.write("\n");
    res.end();
}).listen(3000)
console.log('GET服务启动了')