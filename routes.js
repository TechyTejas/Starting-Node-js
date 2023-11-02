const fs = require('fs'); //fs allows us to work with file system

const requestHandler = (req,res) => {
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
  req.on("data",(chunk)=>{  //on method allows to listen to certain event 
      // Data arrives in chunks, so we collect them in an array.
       body.push(chunk)
  }) 
  return req.on('end',()=>{ // All data has been received; now we concatenate and convert it to a string.
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split('=')[1];
      fs.writeFile ('message.txt', message, ()=>{  //fs.writeFile is a function in Node.js used to write data to a file. It is part of the fs (file system) module, which provides methods for working with the file system.
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
}

module.exports = requestHandler