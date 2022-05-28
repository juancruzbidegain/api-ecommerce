const faker = require("faker");
const boom = require("@hapi/boom")

class ProductsService {

    constructor() {
        this.products = [];
        this.generate()
    }

    async generate() {
        const limit = 100;
        for (let i = 0; i < limit; i++) {
            this.products.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.imageUrl(),
                isBlock:faker.datatype.boolean()
            })
        }
    }
    async findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.products)
            },5000)
        })
    }
    async findOne(id) {
        const product = this.products.find(product => product.id === id)
        if(!product){
            throw boom.notFound("Product not found 😢")
        }
        if(product.isBlock){
            throw boom.conflict("Product is Block 🎯")
        }
        return product;
    }
    async create(product) {
        const newProduct = {
                id: faker.datatype.uuid(),
                ...product
        }
        this.products.push(newProduct)
        return newProduct;
    }
    
    async update(id, changes) {
        const index = this.products.findIndex(item => item.id === id)
        if(index === -1){
            throw boom.notFound("Product not found 😢")
        }
        const product = this.products[index]
        this.products[index] = {
            ...product,
            ...changes
        }
        return this.products[index]
    }
    async delete(id) { 
        const index = this.products.findIndex(item => item.id === id)
        if(index === -1){
            throw boom.notFound("Product not found 😢")
        }
        this.products.splice(index,1)
        return {id: id}
    }

}



module.exports = ProductsService;
