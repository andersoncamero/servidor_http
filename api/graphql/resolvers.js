const { getProduct, getProducts, addProduct, updateProduct, deleteProduct } = require('./product.resolvers')
const { login } = require('./auth.resolvers')
const { addCategory } = require('./category.resolvers')
const { RegularExpression } = require('graphql-scalars')

const CategoryNameType = new RegularExpression ('CategoryNameType', /^/ )

const resolvers = {
  Query: {
    hello: () => 'hola mundo',
    getNumbers: (_, args) => args.numbers,

    //products
    product: getProduct,
    products: getProducts,
  },
  Mutation: {
    addProduct,
    updateProduct,
    deleteProduct,
    login,
    addCategory
  }
}

module.exports = resolvers
