const express = require('express');
const app = express();
const PORT = process.env.PORT || 4900;

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

app.get("/cart",(req,res) => {
  res.render("cart");
});

app.get("/details",(req,res) =>{
  res.render("product-details");
});

app.get("/about",(req,res) =>{
  res.render("about");
});