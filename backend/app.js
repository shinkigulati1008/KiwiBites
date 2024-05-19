const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors({
  origin: 'http://localhost:5173' // or '*' to allow all origins
}));
app.use(bodyParser.json());
app.use('/api', routes);



app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});