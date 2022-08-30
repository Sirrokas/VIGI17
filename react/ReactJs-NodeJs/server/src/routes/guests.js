const express = require('express');
const Joi = require('joi');
const mysql = require('mysql2/promise');
const DB_CONFIG = require('../../config');

const router = express.Router();

const guestsSchema = Joi.object({
  events_id: Joi.string(),
  name: Joi.string(),
  email: Joi.string().email().trim().lowercase(),
  age: Joi.string(),
});

const updateGuestsSchema = Joi.object({
  events_id: Joi.string(),
  name: Joi.string(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net'] },
  }),
  age: Joi.string(),
});

router.get('/guests/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const con = await mysql.createConnection(DB_CONFIG);
    const [[rows]] = await con.query(
      `SELECT id, events_id, name, email, age FROM guests WHERE id=${Number(
        id,
      )}`,
    );
    await con.end();
    return res.json(rows || {});
  } catch (err) {
    return res.status(500).json({
      status: 500,
      err,
    });
  }
});

router.get('/guests', async (req, res) => {
  try {
    const con = await mysql.createConnection(DB_CONFIG);
    const [rows] = await con.query(
      'SELECT id, events_id, name, email, age FROM guests',
    );
    await con.end();
    return res.json(rows);
  } catch (err) {
    return res.status(500).json({
      status: 500,
      err,
    });
  }
});

router.post('/guests', async (req, res) => {
  const { events_id, name, email, age } = req.body;
  try {
    await guestsSchema.validateAsync({
      events_id,
      name,
      email,
      age,
    });
  } catch (err) {
    return res.status(400).json(err);
  }
  try {
    const connection = await mysql.createConnection(DB_CONFIG);
    const [rows] = await connection.query('INSERT INTO guests SET ?', {
      events_id,
      name,
      email,
      age,
    });
    await connection.end();
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.patch('/guests/:id', async (req, res) => {
  const { id } = req.params;
  const { events_id, name, email, age } = req.body;
  try {
    try {
      await updateGuestsSchema.validateAsync({ events_id, name, email, age });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        err,
      });
    }

    const guestData = {};
    if (events_id) guestData.events_id = events_id;
    if (name) guestData.name = name;
    if (email) guestData.email = email;
    if (age) guestData.age = age;
    const con = await mysql.createConnection(DB_CONFIG);
    const [resp] = await con.query(
      `UPDATE guests SET ? WHERE id="${Number(id)}"`,
      guestData,
    );
    await con.end();
    return res.json(resp);
  } catch (err) {
    return res.status(500).json({
      status: 500,
      err,
    });
  }
});

router.delete('/guests/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const con = await mysql.createConnection(DB_CONFIG);
    const [resp] = await con.query(
      `DELETE FROM guests WHERE id="${Number(id)}"`,
    );
    await con.end();
    return res.json(resp);
  } catch (err) {
    return res.status(500).json({
      status: 500,
      err,
    });
  }
});

module.exports = router;
