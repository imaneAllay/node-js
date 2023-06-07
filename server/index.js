const cors = require('cors')
const express = require('express')
const { body, check, param, validationResult } = require('express-validator');
const { result } = require('lodash');
const con= require('./sql.js').con


const PORT = 80
const app = express()
const corsOptions = { origin: ['http://localhost:3000'], optionsSuccessStatus: 200 }

// Middleware...
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Your endpoints here..


app.get('/message', cors(corsOptions), async (req, res) => {
    res.send({message: 'Hello World!!!'})
   })
// get car
   app.get('/car/:id', cors(corsOptions), async (req, res) => {
    const {id} = req.params;
    let result = await con.query('SELECT * FROM car  where car_id=?',[id])
    console.log(result[0])
    res.send(result[0])
    
   })
// get make cars?make=Ford

// app.get('/car/:make', cors(corsOptions), async (req, res) => {
// const make = req.params.make;
//  let result = await con.query('SELECT * FROM car where make=?', [make])
// console.log(result[0])
// res.send(result[0])
// })
// Ex 4 ---POST

   app.post('/car/', cors(corsOptions), async (req, res) => {
    const { model, make, color, price } = req.body;
    let result = await con.query(
        'INSERT INTO car (model, make, color, price) VALUES ("Corolla", "Toyota", "Gray", "30000")'
        
      );
    console.log(result[0])
    res.send(result[0])
    
   })



app.listen(PORT, () => {
    console.log(`Express web API running on port: ${PORT}.`)
})

