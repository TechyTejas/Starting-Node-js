const http = require('http');
const fs = require('fs'); //fs allows us to work with file system
const { parse } = require('path');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>')
    res.write('<head><title>Enter message</title><head>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"</body><button type="Submit">submit</button></form></body>')
    res.write('</html>') ;
    return res.end(); 
 }
 if(url==='/message' && method==='POST'){
    const body = [];
    req.on("data",(chunk)=>{
         body.push(chunk)
    }) //on method allows to listen to certain event
    return req.on('end',()=>{
        const parseBody = Buffer.concat(body).toString();
        const message = parseBody.split('=')[1];
        fs.writeFile ('message.txt', message, ()=>{
            res.statusCode = 302;
            res.setHeader('Location','/')
            return res.end();
        });
        console.log(parseBody)
       
    })
}
  
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head><title>My First Page</title><head>')
  res.write('<body><h1>Hello from my NODE JS Server!</h1></body>')
  res.write('</html>')
  res.end();
  
});

server.listen(4000);
