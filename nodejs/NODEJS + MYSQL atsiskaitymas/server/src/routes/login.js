const express = require('express');
const joi = require('joi');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const DB_CONFIG = require('../../config');

const router = express.Router();

const userLogSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().min(4).required(),
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    await userLogSchema.validateAsync({ email, password });
  } catch (err) {
    return res.status(400).json(err);
  }
  try {
    const connection = await mysql.createConnection(DB_CONFIG);
    const [user] = await connection.query(
      `SELECT * FROM users WHERE email="${email}"`,
    );
    await connection.end();
    console.log('user', user);
    if (user.length === 0) {
      return res
        .status(404)
        .json({ status: 'Bad Request!', error: 'User Not Found!' });
    }
    const compare = await bcrypt.compare(password, user[0].password);
    if (!compare) {
      return res
        .status(404)
        .json({ status: 'Bad Request!', error: 'Password is incorrect!' });
    }
    const token = jwt.sign(
      {
        id: user[0].id,
      },
      process.env.JWT_SECRET,
    );
    return res.json({
      user: {
        id: user[0].id,
      },
      token,
    });
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
