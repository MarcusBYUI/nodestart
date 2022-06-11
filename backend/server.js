const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const mongodb = require("./db/connect");
const professionalRoutes = require("./routes");
const path = require("path");

const port = process.env.PORT || 8080;
const app = express();

app.use("/", express.static(path.join(__dirname, "../frontend")));

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/professional", professionalRoutes);

app.get("/", (req, res) => {
  //res.send("We are just chilling here with express");
  res.sendFile(path.join(__dirname, "../frontend", "index.html"));
});

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
