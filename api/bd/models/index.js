const { User, UserSchema } = require('./user.model')
const { Customer, CustomerSchema } = require('./customer.model')
const {Category, CategorySchemsa} = require('./category.models')
const {Product, ProductSchemsa} = require('./product.models')
const{Order, OrderSchemsa} = require('./order.model')
const{Order_Product, Order_ProductSchema} = require('./order-product.models')

function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize))
    Customer.init(CustomerSchema, Customer.config(sequelize))
    Category.init(CategorySchemsa, Category.config(sequelize))
    Product.init(ProductSchemsa, Product.config(sequelize))
    Order.init(OrderSchemsa, Order.config(sequelize))
    Order_Product.init(Order_ProductSchema, Order_Product.config(sequelize))
    

    User.associate(sequelize.models)
    Customer.associate(sequelize.models)
    Category.associate(sequelize.models)
    Product.associate(sequelize.models)
    Order.associate(sequelize.models)
}

module.exports = setupModels