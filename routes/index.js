const { Router } = require('express');
const router = Router();

//router.use('/auth', require('./auth'));
router.use(require('./menu'));
router.use(require('./empleado'));
router.use(require('./clients'));
router.use(require('./servicio'));
router.use(require('./cliente'));
router.use(require('./comentario'));
router.use(require('./reserva'));

module.exports = router;
