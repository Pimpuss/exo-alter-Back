require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mysql = require("./config/db");
const routes = require("./routes/index");

const server = express();

mysql.connect((err) => {
  if (err) {
    console.error("erreur de connection" + err.stack);
  } else {
    console.log(
      "connecté à la base de données avec le threadId : " + mysql.threadId
    );
  }
});

server.use(cors());
server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/liste", routes.liste);

server.get("/", (req, res) => {
  res.status(200).json("Yo ! ça fonctionne");
});

server.listen(
  process.env.PORT,
  console.log(`http://localhost:${process.env.PORT}`)
);
