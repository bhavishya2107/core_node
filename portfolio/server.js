var http = require('http');
var fs = require('fs');
var server = http.createServer(requestHandler);
const file_path = __dirname

function requestHandler(req, res) {
  console.log(req.url)
  // handle all html file together
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html')
    fs.createReadStream(file_path + '/templates' + '/index.html').pipe(res);

  } else if (req.url === '/react') {
    res.setHeader('Content-Type', 'text/html')
    fs.createReadStream(file_path + '/templates' + '/react.html').pipe(res);
  } else if (req.url === '/js') {
    res.setHeader('Content-Type', 'text/html')
    fs.createReadStream(file_path + '/templates' + '/js.html').pipe(res);
  } else if (req.url === '/mdb') {
    res.setHeader('Content-Type', 'text/html')
    fs.createReadStream(file_path + '/templates' + '/mdb.html').pipe(res);
  }
  else if (req.url.includes('css')) {
    res.setHeader('Content-Type', 'text/css')
    fs.createReadStream(file_path + '/css' + req.url).pipe(res);
  } else if (['png', 'jpg', 'jpeg'].indexOf(req.url.split('.').pop()) > -1) {
    //send images here with appropraite content type
    res.setHeader('Content-type','image/jpg')
    fs.createReadStream(file_path  + req.url).pipe(res);

  }
  else {
    res.statusCode = 400;
    res.end('Page not found')
  }
}

server.listen(3000);