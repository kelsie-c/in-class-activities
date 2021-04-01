const http = require('http');
const fs = require('fs');

const { PORT = 8080 } = process.env;

const notFound = (request, response) => {
  response.writeHead(404, { 'Content-Type': 'text/html' });
  response.end(`${request.url} NOT FOUND`);
}

http
  .createServer((request, response) => {
    const htmlFiles = {
      '/': 'default',
      '/foods': 'foods',
      '/movies': 'movies',
      '/cssframeworks': 'cssframeworks'
    }

    const fileName = htmlFiles[request.url];

    if (!fileName) {
      notFound(request, response);
      return;
    }

    fs.readFile(`${fileName}.html`, (error, content) => {
      if (error) {
        console.error('err:', error.message, 'url', request.url);
        notFound(request, response);
        return;
      }

      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(content);
    });
  })
  .listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
