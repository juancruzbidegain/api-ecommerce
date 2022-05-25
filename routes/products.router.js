const { response } = require("express");
const express = require("express");
const router = express.Router()

const ProductsService = require("../services/products.service")

const service = new ProductsService()



router.get("/", async (req, res) => {
    const productsAll = await service.findAll()
    return res.json(productsAll)
})

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const productsOne = await service.findOne(id)
        res.json(productsOne);
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res) => {
    const body = req.body;
    const newProduct = service.create(body)
    res.status(201).json(newProduct)
})

router.patch('/:id', async (req, res) => {
    try {
        const { body } = req;
        const { id } = req.params;
        const product = await service.update(id, body)
        res.json(product)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const product = service.delete(id)
    res.json(product)
})


module.exports = router;