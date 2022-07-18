const { request } = require('express');
const express = require('express');
const joi = require('joi');
const mysql = require('mysql2/promise');
const DB_CONFIG = require('../../config');
const isLoggedIn = require('../middleware/authorization');

const router = express.Router();

const accountsSchema = joi.object({
  grupes_id: joi.number(),
});

router.post('/accounts', isLoggedIn, async (req, res) => {
  const { grupes_id } = req.body;
  try {
    await accountsSchema.validateAsync({ grupes_id });
  } catch (err) {
    return res.status(400).json(err);
  }
  try {
    const connection = await mysql.createConnection(DB_CONFIG);
    const [response] = await connection.query('INSERT INTO accounts SET ?', {
      grupes_id: request.body,
      user_id: request.user_id,
    });
    await connection.end();
    return res.json(response);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get('/accounts', isLoggedIn, async (req, res) => {
  try {
    const con = await mysql.createConnection(DB_CONFIG);
    const [rows] = await con.query(
      'SELECT grupes_id, name from accounts JOIN grupes ON accounts.grupes_id=grupes.id',
    );
    await con.end();
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
