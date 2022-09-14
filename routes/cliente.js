const { Router } = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const {Clients} = require('../db');
const router = Router();

router.get('/cliente', async (req, res) => {
  const client = await Clients.findAll();
  res.json(client);
});

router.post('/cliente', async (req, res) => {
  const person = await Clients.create(req.body);
  res.json(person);
});

router.patch('/cliente/:id', async (req, res) => {
  const person = await Clients.update(req.body, { where: { id: req.params.id } });
  res.json(person);
});

router.delete('/cliente/:id', async (req, res) => {
  const person = await Clients.destroy({ where: { id: req.params.id } });
  res.json(person);
});

module.exports = router;
