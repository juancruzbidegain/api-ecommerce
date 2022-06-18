const express = require("express")
const router = express.Router()

const overview = require("./overview-api.router.js")
const homeRouter = require("./home.router")
const productsRouter = require("./products.router")
const categoriessRouter = require("./categories.router")
const usersRouter = require("./users.router")

function routerApi(app){
    app.use('/', overview)
    app.use('/api/v1', router)
    router.use('/',overview)
    router.use('/products', productsRouter)
    router.use('/categories', categoriessRouter)
    router.use('/users', usersRouter)
}

module.exports = routerApi;