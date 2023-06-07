const cors = require("cors");
const express = require("express");
const { body, check, param, validationResult } = require("express-validator");
const { result } = require("lodash");
const con = require("./sql.js").con;

const PORT = 80;
const app = express();
const corsOptions = {
  origin: ["http://localhost:3000"],
  optionsSuccessStatus: 200,
};

// Middleware...
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Your endpoints here..

//EX1
app.get("/message", cors(corsOptions), async (req, res) => {
  res.send({ message: "Hello World!!!" });
});
// Ex 2
app.get("/car/:id", cors(corsOptions), async (req, res) => {
  const { id } = req.params;
  let result = await con.query("SELECT * FROM car  where car_id=?", [id]);
  console.log(result[0]);
  res.send(result[0]);
});
// EX3

app.get("/car/:make", cors(corsOptions), async (req, res) => {
  const make = req.params.make;
  let result = await con.query("SELECT * FROM car where make=?", [make]);
  console.log(result[0]);
  res.send(result[0]);
});
// Ex 4 ---POST

app.post("/car/", cors(corsOptions), async (req, res) => {
  const { model, make, color, price } = req.body;
  let result = await con.query(
    'INSERT INTO car (model, make, color, price) VALUES ("?", "?", "?", "?")',
    [model, make, color, price]
  );
  console.log(result[0]);
  res.send(result[0]);
});

// EX5 I can change any value by searchin the id in the url
app.put("/car/:id", cors(corsOptions), async (req, res) => {
  const { id } = req.params;
  const { model, make, color, price } = req.body;
  let result = await con.query(
    "UPDATE car SET model = ?, make = ?, color = ?, price = ? WHERE car_id = ?",
    [model, make, color, price, id]
  );
  console.log(result[0]);
  res.send(result[0]);
});

// EX6
app.delete("/car/:id", cors(corsOptions), async (req, res) => {
  const { id } = req.params;
  // const { model, make, color, price } = req.body;
  let result = await con.query("DELETE  FROM car WHERE car_id = ?", [id]);
  console.log(result[0]);
  res.send(result[0]);
});

app.listen(PORT, () => {
  console.log(`Express web API running on port: ${PORT}.`);
});
