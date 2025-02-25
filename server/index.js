const express = require('express');
const searchRouter = require('./routes/search');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/search', searchRouter);

app.get('/', (req, res) => {
  res.send('Zafo.ai Analytics Tool Backend');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
