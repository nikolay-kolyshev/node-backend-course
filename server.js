//const fs = require('fs');
const http = require('http');

const PORT = 5555;

const server = http.createServer((req, res) => {
    console.log(req);
    switch (req.url) {
        case '/home': {
            const data = 'best online course';
            res.write(data);
            res.end();
            break;
        }
        default: {
            res.write('404 not found');
            res.end();
        }
    }
});

server.listen(PORT, () => {
    console.log('server is running on port ' + PORT);
});