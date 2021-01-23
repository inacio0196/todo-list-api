const express = require('express');
const router = express.Router();
const knex = require('../database');

// Controllers
const TaskController = require('../controllers/TasksController');

router.get('/', TaskController.index)

router.post('/', (request, response, next) => {
  const { task_title, task_description } = request.body

  const task = {
    title: task_title,
    description: task_description,
  }
  
  response.status(200).send({
    mensagem: 'Task criada com sucesso!',
    task: task
  })
})

router.delete('/', (request, response, next) => {
  response.status(200).send({
    mensagem: 'Task deletada com sucesso!'
  })
})

router.patch('/', (request, response, next) => {
  response.status(200).send({
    mensagem: 'Task atualizada com sucesso!'
  })
})

router.get('/:task_id', (request, response, next) => {
  const taskID = request.params.task_id
  
  response.status(200).send({
    mensagem: 'Task com ID especifico',
    task_id: taskID,
  })
})

module.exports = router;