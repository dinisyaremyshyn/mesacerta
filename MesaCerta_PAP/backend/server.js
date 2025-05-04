const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ MongoDB ligado'))
  .catch(err => console.error(err));

app.use('/auth', require('./routes/auth'));

app.listen(process.env.PORT, () => {
  console.log(`🚀 Servidor a correr em http://localhost:${process.env.PORT}`);
});

require('dotenv').config();