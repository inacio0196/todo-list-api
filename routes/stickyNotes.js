const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
  response.status(200).send({
    mensagem: 'Pegou as notes com sucesso!'
  })
})

router.post('/', (request, response, next) => {
  response.status(200).send({
    mensagem: 'Notes criada com sucesso!'
  })
})

router.delete('/', (request, response, next) => {
  response.status(200).send({
    mensagem: 'Notes criada com sucesso!'
  })
})

router.patch('/', (request, response, next) => {
  response.status(200).send({
    mensagem: 'Notes criada com sucesso!'
  })
})

router.get('/:task_id', (request, response, next) => {
  const taskID = request.params.task_id

  response.status(200).send({
    mensagem: 'Pegou a note por id',
    task_id: taskID,
  })
})

module.exports = router;