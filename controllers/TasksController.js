const knex = require('../database');

module.exports = {
  async index (request, response) {
    const tasks = await knex('tasks')

    return response.json(tasks)
  }
}