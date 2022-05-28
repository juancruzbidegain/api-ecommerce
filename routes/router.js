const express = require("express")
const router = express.Router()

const homeRouter = require("./home.router")
const productsRouter = require("./products.router")
const categoriessRouter = require("./categories.router")
const usersRouter = require("./users.router")

function routerApi(app){
    app.use('/api/v1', router)
    router.use('/', homeRouter)
    router.use('/products', productsRouter)
    router.use('/categories', categoriessRouter)
    router.use('/users', usersRouter)
}

module.exports = routerApi;