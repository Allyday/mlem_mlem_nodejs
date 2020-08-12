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

app.get("/menu", (req, res) => {
  res.render("menu");
});

app.get("/details", (req, res) => {
  res.render("product-details");
});

app.get("/cart", (req, res) => {
  res.render("cart");
});

app.get("/about", (req, res) => {
  res.render("about");
});