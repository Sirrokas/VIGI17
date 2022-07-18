const express = require('express');
require('dotenv').config();
const cors = require('cors');
const loginRouter = require('./src/routes/login');
const regRouter = require('./src/routes/register');
const groupsRouter = require('./src/routes/groups');
const accountsRouter = require('./src/routes/accounts');
const billsRouter = require('./src/routes/bills');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', loginRouter);
app.use('/api', regRouter);
app.use('/api', groupsRouter);
app.use('/api', accountsRouter);
app.use('/api', billsRouter);

app.all('*', (req, res) => {
  res.status(404).send('Path not found!');
});

app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
