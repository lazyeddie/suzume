const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/posts.js');
const dotenv = require('dotenv');

const app = express();

dotenv.config({ path: './.env' });

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', router);
app.get('/', (req, res) => {
  res.send('Welcome to Suzume');
})

const PORT = process.env.PORT|| 5000;
const CONNECTION_URL = process.env.CONNECTION_URL; 

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
