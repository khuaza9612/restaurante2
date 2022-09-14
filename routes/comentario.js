const { Router } = require('express');
const {Cliente} = require('../db');
const Comentario = require('../models/Comentario');
const router = Router();

router.get('/comentario', async (req, res) => {
  const comment = await Comentario.findAll({
    include: {
      model: Cliente
    }
  });
  res.json(comment);
});

router.post('/comentario', async (req, res) => {
  const comment = await Comentario.create(req.body, {
    include: {
      model: Cliente
    }
  });
  res.json(comment);
});

router.patch('/comentario/:id', async (req, res) => {
  const comment = await Comentario.update(req.body, { where: { id: req.params.id } });
  res.json(comment);
});

router.delete('/comentario/:id', async (req, res) => {
  const comment = await Comentario.destroy({ where: { id: req.params.id } });
  res.json(comment);
});

module.exports = router;
