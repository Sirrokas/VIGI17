const express = require('express');
const joi = require('joi');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const DB_CONFIG = require('../../config');

const router = express.Router();

const userRegSchema = joi.object({
  fullName: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().min(4).required(),
  rePassword: joi.string().min(4).required(),
});

router.post('/register', async (req, res) => {
  try {
    const { fullName, email, password, rePassword } = req.body;
    try {
      await userRegSchema.validateAsync({
        fullName,
        email,
        password,
        rePassword,
      });
    } catch (err) {
      return res.status(400).json(err);
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const con = await mysql.createConnection(DB_CONFIG);
    const [data] = await con.query(
      `SELECT * from users WHERE fullName="${fullName}"`,
    );
    if (data[0]) {
      return res.status(400).json({
        error: 'User with this username already exists!',
      });
    }
    const [rows] = await con.query('INSERT INTO users SET ?', {
      fullName,
      email,
      password: hashedPassword,
    });
    await con.end();
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
