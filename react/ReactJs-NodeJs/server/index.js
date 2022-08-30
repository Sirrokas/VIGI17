const express = require('express');
require('dotenv').config();
const cors = require('cors');
const authRouter = require('./src/routes/auth');
const guestsRouter = require('./src/routes/guests');
const eventsRouter = require('./src/routes/events');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/v1/', authRouter);
app.use('/api/v1/', guestsRouter);
app.use('/api/v1/', eventsRouter);
app.all('*', (req, res) => {
  res.status(404).send('Path not found!');
});

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
