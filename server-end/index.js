const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express()
const apiPort = 8000

// middlewares
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

// routes
app.get('/',(req,res)=>{
    res.send('Hello ricky!')
})


const server = app.listen(process.env.PORT||apiPort, "0.0.0.0", () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`server is listening at http://${host}:${port}`);
  });