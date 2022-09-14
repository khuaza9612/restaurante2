const { Router } = require('express');
const {Empleado} = require('../db');
const router = Router();

router.get('/empleado', async (req, res) => {
  const empleado = await Empleado.findAll();
  res.json(empleado);
});

router.post('/empleado', async (req, res) => {
  const person = await Empleado.create(req.body);
  res.json(person);
});

router.patch('/empleado/:id', async (req, res) => {
  const person = await Empleado.update(req.body, { where: { id: req.params.id } });
  res.json(person);
});

router.delete('/empleado/:id', async (req, res) => {
  const person = await Empleado.destroy({ where: { id: req.params.id } });
  res.json(person);
});

module.exports = router;
