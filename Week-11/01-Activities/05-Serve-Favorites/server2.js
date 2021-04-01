const http = require('http');
const fs = require('fs');

const { PORT = 8080 } = process.env;

http
  .createServer((request, response) => {
    let requestData = '';
    request.on('data', (data) => {
      requestData =+ data;
    })

    request.on('end', () => {
      console.log(`The client made a ${request.method} request to ${request.url} with the following data ${requestData}`);
    })

    response.end(`<h1>Enter your data</h1>
    <form action="postdata" method="POST">
    <div>
      <label>First Name</label>
      <input name="firstName">
    </div>
    <div>
      <label>Last Name</label>
      <input name="lastName">
    </div>
    <button type="submit">Submit</button>
    </form>`);
  })

  .listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
