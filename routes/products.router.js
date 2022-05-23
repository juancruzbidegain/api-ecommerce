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
    res.status(201).json({message: "create :)", data:body})
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