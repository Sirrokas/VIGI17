const express = require('express');
const mysql = require('mysql2/promise');
const DB_CONFIG = require('../../config');

const router = express.Router();

router.get('/groups', async (req, res) => {
  try {
    const con = await mysql.createConnection(DB_CONFIG);
    const [rows] = await con.query('SELECT * FROM grupes');
    await con.end();
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
