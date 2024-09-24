const http = require('http');
const moment = require('moment');

const date = moment().format('MMM Do YY')
console.log(date);

const hostname =
  process.env.NODE_ENV !== "production" ? "localhost" : "dicoding.com";
const port = 3000;
const input = process.argv;
const memoryInformation = process.memoryUsage();
const requestHandler = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(`Hello, ${input[2]} ${input[3]}!\n ${JSON.stringify(memoryInformation)}`);
};
const server = http.createServer(requestHandler);


server.listen(port, hostname, () => {
  console.log(`Server berjalan pada http://${hostname}:${port}`);
});
