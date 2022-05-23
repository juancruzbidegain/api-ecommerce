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
    create() { }
    update() { }
    delete() { }

}



module.exports = ProductsService;
