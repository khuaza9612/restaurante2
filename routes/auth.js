const { Router } = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {Cliente} =require('../db');

const router = Router();

router.post('/register', async (req, res) => {
  const { password, ...others } = req.body;
  try {
    const encryptedPw = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    const client = await Cliente.create({ ...others, password: encryptedPw });
    res.status(201).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    const client = await Cliente.findOne({ where: { username: req.body.username } });
    if (!client) return res.status(401).json('Credenciales inválidas');

    console.log(client);

    const encryptedPw = bcrypt.compareSync(req.body.password, client.password);

    const { password, id, username, name, description, isAdmin } = client;

    if (encryptedPw) {
      const token = jwt.sign(
        {
          id,
          username,
          password: req.body.password,
          isAdmin
        },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
      );
      return res.status(200).json({ id, username, name, description, token, isAdmin });
    } else {
      return res.status(401).json('Credenciales inválidas');
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
