const express = require('express')
const routes = express.Router()

// Controllers
const TasksController = require('./controllers/TasksController')

routes
    // Tasks
    .get('/tasks', TasksController.index)
    .post('/tasks', TasksController.create)
    .put('/tasks/:id', TasksController.update)


module.exports = routes