const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  console.log(`URL: ${url}, Method: ${method}`);

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body>');

  // Check the URL and return custom responses
  if (url === '/home' && method === 'GET') {
    res.write('<h1>Welcome home</h1>');
  } else if (url === '/about' && method === 'GET') {
    res.write('<h1>Welcome to About Us page</h1>');
  } else if (url === '/node' && method === 'GET') {
    res.write('<h1>Welcome to my Node.js project</h1>');
  } else {
    res.write('<h1>Page not found</h1>');
  }

  res.write('</body>');
  res.write('</html>');
  res.end();
});

server.listen(4000);
