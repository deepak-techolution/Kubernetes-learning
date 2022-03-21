var http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, { "content-type": 'text/plain' })
    response.write('Hello World! Here we come.')
    response.end();
}).listen(1998)