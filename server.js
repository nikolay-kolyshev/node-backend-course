const http = require('http');

const PORT = 3003;

const getPageTitleByRouteName = (routeName) => {
    return `<h1>${routeName}</h1>`
}

let requestCount = 0;

const server = http.createServer((request, response) => {
    console.log(`Server listening on port ${PORT}`);

    response.write(`
        <!DOCTYPE html>
            <head>
                <title>Backend course</title>
                <meta charset="utf-8">
                <link rel="" href="https://e7.pngegg.com/pngimages/306/649/png-clipart-smiley-emoticon-computer-icons-cool-miscellaneous-smiley.png" type="image/png" />
            </head>
            <body>
    `);

    switch (request.url) {
        case '/':
        case '/courses':
            response.write(getPageTitleByRouteName('Courses'));
            break;
        case '/students':
            response.write(getPageTitleByRouteName('Students'));
            break;
        default:
            response.write(getPageTitleByRouteName('Not found'));
    }

    if (!request.url.endsWith('.ico')) {
        ++requestCount;
    }

    response.write(`<div>requestCount <b>${requestCount}</b></div></body></html>`)

    response.end();
});

server.listen(PORT);