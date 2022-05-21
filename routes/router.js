const homeRouter = require("./home.router")
const productsRouter = require("./products.router")
const categoriessRouter = require("./categories.router")
const usersRouter = require("./users.router")

function routerApi(app){
    app.use('/', homeRouter)
    app.use('/products', productsRouter)
    app.use('/categories', categoriessRouter)
    app.use('/users', usersRouter)
}

module.exports = routerApi;