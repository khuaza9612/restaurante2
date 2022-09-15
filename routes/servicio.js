const { Router } = require('express');
const Servicio = require('../db');
const router = Router();

router.get('/servicio', async (req, res) => {
  const servicio = await Servicio.findAll();
  res.json(servicio);
});

router.post('/servicio', async (req, res) => {
  const service = await Servicio.create(req.body);
  res.json(service);
});

router.patch('/servicio/:id', async (req, res) => {
  const service = await Servicio.update(req.body, { where: { id: req.params.id } });
  res.json(service);
});

router.delete('/servicio/:id', async (req, res) => {
  const service = await Servicio.destroy({ where: { id: req.params.id } });
  res.json(service);
});

module.exports = router;
