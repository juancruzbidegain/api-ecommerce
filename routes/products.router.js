const express = require("express");
const router = express.Router()

const ProductsService = require("../services/products.service")

const service = new ProductsService()



router.get("/", (req, res) => {
    const productsAll = service.findAll()
    return res.json(productsAll)
})

router.get("/:id", (req, res) => {
    const { id } = req.params
    const productsOne = service.findOne(id)
    res.json(productsOne);
})

router.post('/', (req, res) => {
    const body  = req.body;
    const newProduct = service.create(body)
    res.status(201).json(newProduct)
})

router.patch('/:id', (req, res) => {
    const { body }= req;
    const {id} = req.params;
    const product = service.update(id, body)
    res.json(product)
})

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    const product = service.delete(id)
    res.json(product)
})


module.exports = router;