const knex = require('../database');

module.exports = {
  async index (request, response, next) {
    try {
      const { user_id, page = 1 } = request.query
      const query = knex('tasks').limit(5).offset((page - 1) * 5)

      const countObject = knex('tasks').count()
      
      if (user_id) {
        query
          .where({ user_id })
          .join('users', 'users.id', '=', 'tasks.user_id')
          .select('tasks.*', 'users.name')

        countObject
          .where({ user_id })
      }

      const [count] = await countObject
      
      response.header('X-Total-Count', count['count'])

      const results = await query
      
      return response.json(results)
    } catch (error) {
      next(error)
    }
  },

  async create (request, response, next) {
    try {
      const { task_title, task_description, user_id } = request.body
    
      await knex('tasks').insert({
        task_title,
        task_description,
        user_id,
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
    try {
      const { id } = request.params

      await knex('tasks')
        .where({ id })
        .del()

      return response.send()
    } catch (error) {
      next(error)
    }
  }
}