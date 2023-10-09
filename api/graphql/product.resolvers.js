const ProductService = require('./../services/product.service')
const service = new ProductService()

const getProduct = async (_, { id }) => {
  const product = await service.findOne(id)
  return product
}

const getProducts = async () => {
  const products = await service.find({})
  return products
}

const addProduct = async (_, { dto }) => {
  const newProduct = await service.create(dto)
  return newProduct
}

const updateProduct = async (_, { id, dto }) => {
  const product = await service.update(id, dto)
  return product
}
const deleteProduct = (_, { id }) => {
  return service.delete(id)
}
module.exports = { deleteProduct, getProduct, getProducts, addProduct, updateProduct }
