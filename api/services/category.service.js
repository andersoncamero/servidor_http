const boom = require('@hapi/boom')
const { models } = require('./../libs/sequelize')


class CategoryService{

constructor(){}

async create(data){
    const newCategory = await models.Category.create(data);
    return newCategory;
}

async find() {
    const Category = await models.Category.findAll()
    return Category
}

async findOne(id){
    const Category = await models.Category.findByPk(id, {
        include: ['products']
    })
    if (!Category) {
       throw boom.notFound('Category not found')
    }
  return Category 
}

async update(id, changer){
    const Category = await this.findOne(id)
    const rta = await Category.update(changer)
    return rta;
}

async delete(id){
    const Category = await this.findOne(id)
    await Category.destroy(id);
    return  id ;
}

}

module.exports = CategoryService