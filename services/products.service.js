const faker = require("faker");

class ProductsService {

    constructor() {
        this.products = [];
        this.generate()
    }

    generate() {
        const limit = 100;
        for (let i = 0; i < limit; i++) {
            this.products.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.imageUrl()
            })
        }
    }
    findAll() {
        return this.products;
    }
    findOne(id) {
        return this.products.find(product => product.id === id)
    }
    create(product) {
        const newProduct = {
                id: faker.datatype.uuid(),
                ...product
        }
        this.products.push(newProduct)
        return newProduct;
    }
    update(id, changes) {
        const index = this.products.findIndex(item => item.id === id)
        index === -1 ? new Error("Product not found") : null
        const product = this.products[index]
        this.products[index] = {
            ...product,
            ...changes
        }
        return this.products[index]
    }
    delete(id) { 
        const index = this.products.findIndex(item => item.id === id)
        index === -1 ? new Error("Product not found") : null
        this.products.splice(index,1)
        return {id: id}
    }

}



module.exports = ProductsService;
