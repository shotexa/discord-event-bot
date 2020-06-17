import * as http from 'http';

http.createServer((req, res) => {
    res.end('response');
}).listen(3000);
