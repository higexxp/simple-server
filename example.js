var sys = require('util');
var http = require('http');
var t = 1000;

async function sleep(t) {
  return await new Promise(r => {
    setTimeout(() => {
      r();
    }, t);
  });
}

async function main() {
  if (process.env.WAIT_TIME) {
    t = process.env.WAIT_TIME;
  }

  var server = http.createServer(
    async function (request, response) {
      await sleep(t);
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.write('Hello World!!');
      response.end();
    }
  ).listen(3000);
  sys.log('Server running at http://localhost:3000/');
  sys.log('wait time is ' + t);
}
main();

