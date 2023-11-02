const http = require('http');
const routes = require('./routes')
const { parse } = require('path'); //. It is used to break down a file path or URL into its individual components, such as the directory, file name, and file extension.

const server = http.createServer(routes);

server.listen(4000); //server.listen(4000) is used to start a Node.js server and make it listen for incoming network connections 
                     //on a specified port. In this case, the server is set to listen on port 4000.
