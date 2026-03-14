
const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3003,
  path: '/',
  method: 'GET',
  headers: {
    'Accept': 'text/html'
  }
};

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  res.on('data', (chunk) => {
    // just consume data
  });
  res.on('end', () => {
    console.log('Request completed.');
    process.exit(0);
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
  process.exit(1);
});

req.end();
