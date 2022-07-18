const express = require('express');
const joi = require('joi');
const mysql = require('mysql2/promise');
const DB_CONFIG = require('../../config');
const isLoggedIn = require('../middleware/authorization');

const router = express.Router();

router.get('/bills/:group_id', isLoggedIn, async (req, res) => {
  const { group_id } = req.params;
  try {
    const connection = await mysql.createConnection(DB_CONFIG);
    const [bill] = await connection.query(
      `SELECT * from bills WHERE id=${Number(group_id)}`,
    );
    await connection.end();
    return res.json(bill[0] || {});
  } catch (err) {
    return res.status(500).json(err);
  }
});

const billsSchema = joi.object({
  grupes_id: joi.number().required(),
  amount: joi.number().required(),
  description: joi.string(),
});

router.post('/bills', isLoggedIn, async (req, res) => {
  const { grupes_id, amount, description } = req.body;
  try {
    await billsSchema.validateAsync({ grupes_id, amount, description });
  } catch (err) {
    return res.status(400).json(err);
  }
  try {
    const connection = await mysql.createConnection(DB_CONFIG);
    const billsData = {
      grupes_id,
      amount,
      description,
    };
    const [rows] = await connection.query('INSERT INTO bills SET ?', billsData);
    await connection.end();
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
