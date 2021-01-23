const knex = require('../database');

module.exports = {
  async index (request, response) {
    const tasks = await knex('tasks')
    return response.json(tasks)
  },

  async create (request, response, next) {
    try {
      const { task_title, task_description } = request.body
    
      await knex('tasks').insert({
        task_title,
        task_description,
      })

      return response.status(201).send()
    } catch (error) {
      next(error)
    }
  },

  async update (request, response, next) {
    try {
      const { task_title, task_description } = request.body
      const { id } = request.params
      console.log(id, task_title)

      await knex('tasks')
        .update({ task_title })
        .where({ id })
      
      return response.send()
    } catch (error) {
      next(error)
    }
  },

  async delete (request, response, next) {
    
  }
}