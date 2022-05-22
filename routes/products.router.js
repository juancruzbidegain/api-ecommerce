const express = require("express");
const faker = require("faker");

const router = express.Router()

router.get("/", (req, res) => {

    const { size } = req.query
    const limit = size || 10

    const products = []
    for (let i = 0; i < limit; i++) {
        products.push({
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(), 10),
            image: faker.image.imageUrl()
        })
    }
    res.json(products)
})

router.get("/:id", (req, res) => {
    const { id } = req.params
    res.json({ id: id, name: 'Laptop Gamer', price: 23000, })
})


router.post('/', (req, res) => {
    const body  = req.body;
    res.json({message: "create :)", data:body})
})

router.patch('/:id', (req, res) => {
    const { body }= req;
    const {id} = req.params;
    res.json({message: "update/patch :)", id , data:body})
})

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    res.json({message: "delete :(", id })
})


module.exports = router;