const express = require("express");
const mysql = require("../config/db");

const router = express.Router();

//*ROUTE GET //*
router.get("/", (req, res) => {
  const sql = "SELECT * FROM liste";
  mysql.query(sql, (err, result) => {
    if (err) {
      res
        .status(500)
        .send("Erreur lors de la réception des données depuis la BDD");
    } else {
      res.status(200).json(result);
    }
  });
});

//*ROUTE POST //*
router.post("/", (req, res) => {
  const sql = "INSERT INTO liste (`nom`, `adjectif`) VALUES (?, ?)";
  const values = [req.body.nom, req.body.adjectif];
  mysql.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(result);
    }
  });
});

//*ROUTE PUT //*
router.put("/:id", (req, res) => {
  const { nom, adjectif } = req.body;
  console.log(req.body);
  const { id } = req.params;
  const sql = "UPDATE liste SET nom = ?, adjectif = ? WHERE (id = ?); ";
  const values = [nom, adjectif, id];
  console.log(values);
  mysql.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(result);
    }
  });
});

//*ROUTE DELET //*
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM liste WHERE (id = ?)";

  mysql.query(sql, [id], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(result);
    }
  });
});
module.exports = router;
