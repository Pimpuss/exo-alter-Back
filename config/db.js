require("dotenv").config();
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST, // adresse du server
  port: process.env.DB_PORT, // port sur lequel on est connecté (souvent 4242)
  user: process.env.DB_USER, // nom d'utilisateur de la BDD
  password: process.env.DB_PASSWORD, // Pass de la BDD
  database: process.env.DB_NAME, // Nom de la BDD
});

module.exports = connection;
