const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const dataSchema = require("./Model");
const cors = require("cors");
const app = express();

app.use(bodyparser.json({ limit: "10mb" }));
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://Harbhjan:Harbhjan@cluster0.tztiudx.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(console.log("mongodb connected"));

app.get("/getdata", async (req, res) => {
  const data = await dataSchema.find({});

  return res.send(data);
});

app.post("/data", async (req, res) => {
  const data = req.body;

  // const newdata = data.slice(0, data.length / 2);

  const result = await dataSchema.insertMany(data);
  res.send(result);
});
app.get("/", async (req, res) => {
  return res.send("hello");
});

app.listen(5000, (err) => {
  console.log("server listening at 5000");
});
