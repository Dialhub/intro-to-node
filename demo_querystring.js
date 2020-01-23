var http = require ('http');
var url = require ('url');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var date = q.year + " " + q.month;
    res.write("The Year and the Month is" + date());
    res.end(date);

}).listen(8080);
