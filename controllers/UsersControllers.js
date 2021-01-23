const knex = require('../database');

module.exports = {
  async index (request, response, next) {
    try {
      const users = await knex('users')
      return response.json(users)
    } catch (error) {
      next(error)
    }
  },

  async create (request, response, next) {
    try {
      const { name, email } = request.body
    
      await knex('users').insert({
        name,
        email,
      })

      return response.status(201).send()
    } catch (error) {
      next(error)
    }
  },

  async update (request, response, next) {
    try {
      const { name, email } = request.body
      const { id } = request.params

      await knex('users')
        .update({
          name,
          email
        })
        .where({ id })
      
      return response.send()
    } catch (error) {
      next(error)
    }
  },

  async delete (request, response, next) {
    try {
      const { id } = request.params

      await knex('users')
        .where({ id })
        .del()

      return response.send()
    } catch (error) {
      next(error)
    }
  }
}