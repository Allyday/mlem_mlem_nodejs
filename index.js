const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server is running...');
});

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render(__dirname + '/views/home.ejs');
});

app.get('/login', (req, res) => {
  const obj = {
    name: 'HA',
    age: 21,
  };
  res.send(obj);
});
