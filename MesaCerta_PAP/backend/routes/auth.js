const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({ username, email, password: hashed });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: 'Email já registado' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: 'Email inválido' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: 'Palavra-passe errada' });

  res.json({ message: 'Login bem-sucedido' });
});

router.post('/recover', async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: 'Email não encontrado' });

  const token = crypto.randomBytes(20).toString('hex');
  user.resetToken = token;
  user.resetTokenExpire = Date.now() + 3600000; // 1h
  await user.save();

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    to: user.email,
    from: process.env.EMAIL_USER,
    subject: 'Recuperação de Password - Mesa Certa',
    text: `Clica neste link para redefinir a tua password:\n\nhttp://localhost:5500/reset.html?token=${token}`,
  };

  transporter.sendMail(mailOptions, (err) => {
    if (err) return res.status(500).json({ error: 'Erro ao enviar email' });
    res.json({ message: 'Email enviado com sucesso' });
  });
});

module.exports = router;
