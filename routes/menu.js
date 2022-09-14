const { Router } = require('express');
const {Menu} = require('../db');
const router = Router();

router.get('/menu', async (req, res) => {
  const menu = await Menu.findAll();
  res.json(menu);
});

router.post('/menu', async (req, res) => {
  const dish = await Menu.create(req.body);
  res.json(dish);
});

router.patch('/menu/:id', async (req, res) => {
  const dish = await Menu.update(req.body, { where: { id: req.params.id } });
  res.json(dish);
});

router.delete('/menu/:id', async (req, res) => {
  const dish = await Menu.destroy({ where: { id: req.params.id } });
  res.json(dish);
});

module.exports = router;
