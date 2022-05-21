const express = require("express");
const app = express();
const $PORT = 8080;



app.get("/", (req, res) => {
  res.send("SV Running");
});


app.get("/products", (req, res) => {
  res.json([
  {
    name: 'Laptop Gamer',
    price: 23000,
  },
  {
    name: 'iPhone X3',
    price: 32000,
  }
  ]);
})

app.get("/products/:id", (req, res) => {
  const { id }  = req.params
  res.json({id:id ,name: 'Laptop Gamer',price: 23000, })
})

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
      categoryId,
      productId
  });
});


app.listen($PORT, () => {
  console.log(`Server running on PORT: ${$PORT}`);
});
