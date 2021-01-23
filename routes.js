const express = require('express')
const routes = express.Router()

// Controllers
const TasksController = require('./controllers/TasksController');
const UsersController = require('./controllers/UsersControllers');

routes
    // Users
    .get('/users', UsersController.index)
    .post('/users', UsersController.create)
    .put('/users/:id', UsersController.update)
    .delete('/users/:id', UsersController.delete)
    // Tasks
    .get('/tasks', TasksController.index)
    .post('/tasks', TasksController.create)
    .put('/tasks/:id', TasksController.update)
    .delete('/tasks/:id', TasksController.delete)


module.exports = routes