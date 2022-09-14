const { Router } = require('express');
const {Clients} = require('../db');
const router = Router();

router.get('/clients', async (req, res) => {
  const client = await Clients.findAll();
  res.json(client);
});

router.post('/clients', async (req, res) => {
  const person = await Clients.create(req.body);
  res.json(person);
});

router.patch('/clients/:id', async (req, res) => {
  const person = await Clients.update(req.body, { where: { id: req.params.id } });
  res.json(person);
});

router.delete('/clients/:id', async (req, res) => {
  const person = await Clients.destroy({ where: { id: req.params.id } });
  res.json(person);
});

module.exports = router;
