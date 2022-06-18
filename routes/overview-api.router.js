const express = require("express");
const router = express.Router()


router.get('/', (req, res) => {
  res.send(`
            <h3>Endpoints: </h3>
            <ul>
                <li><b>products</b>: <a href='/api/v1/products'> /api/v1/products </a></li>
                <li>products: /api/v1/products</li>
            </ul>
  `)
})


module.exports = router;