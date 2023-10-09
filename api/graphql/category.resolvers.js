const CategoryService = require('../services/category.service')
const service = new CategoryService()
const checkRolesGql = require('./../../util/auth/checkRolesGql')
const checkJwtGql = require('./../../util/checkJwtGql')

const addCategory = async (_, { dto }, context) => {
  const user = await checkJwtGql(context)
  checkRolesGql(user, 'administrador')
  return service.create(dto)
}

module.exports = { addCategory }
