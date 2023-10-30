const http = require('http')

const server = http.createServer((req,res)=>{
    console.log("My First Server Code");
})


server.listen(4000)