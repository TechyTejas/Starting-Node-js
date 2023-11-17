 
const express = require('express')
const bodyparser=require('body-parser')
 
// const { parse } = require('path'); //. It is used to break down a file path or URL into its individual components, such as the directory, file name, and file extension.

const app = express()

// app.use((req, res, next)=>{
//   console.log("in the middleware")
//   next();  // this allows the request to continue to the next middleware line 
// }) // use allows us to add new middleware function it is flexible method which accpets array of req handlers. the function which we Pass into it 
//           // going to execute for each incoming req
          // here the next is function which is pass into the use function

app.use(bodyparser.urlencoded({extended: false}))

app.use('/add-product',(req, res, next)=>{
res.send('<form action="/product" method="POST"><input type="text" name="title"/><input type=number name="quantity"/><button type="submit">Add product</botton></form>'); 
})           

app.use('/product',(req, res, next)=>{
     console.log(req.body)
     res.redirect('/')
})

app.use('/',(req, res, next)=>{
    res.send('<h1>Welcome to express js</h1>'); 
}) 


app.listen(4000); //server.listen(4000) is used to start a Node.js server and make it listen for incoming network connections 
                     //on a specified port. In this case, the server is set to listen on port 4000.
