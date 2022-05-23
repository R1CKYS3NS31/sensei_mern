const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

// from files
const db = require('./data/db');
const movieRouter = require('./routes/movie_router');

const app = express()
const apiPort = 8001

// middlewares
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

//  db
db.on('error',console.error.bind(console,'MongoDB connection error: '))

// routes
app.get('/',(req,res)=>{
    res.send('Hello ricky!')
})
app.use('/api',movieRouter)



const server = app.listen(process.env.PORT||apiPort, "0.0.0.0", () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`server is listening at http://${host}:${port}`);
  });

//   test data

//   {
//     "name": "Avengers: Endgame",
//     "time": ["14:15", "16:00", "21:30", "23:00"],
//     "rating": 8.8
// }