const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express()

// Routes
const tasksRoute = require('./routes/tasks');
const stickyNotesRoute = require('./routes/stickyNotes')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/tasks', tasksRoute)
app.use('/sticky_notes', stickyNotesRoute)

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  response.header(
    'Access-Control-Allow-Header',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  )

  if (request.method === 'OPTIONS') {
    response.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    return response.status(200).send({})
  }

  next()
})

app.use((request, reponse, next ) => {
  const erro = new Error('route not found')
  erro.status = 404
  next(erro)
})

app.use((error, request, response, next) => {
  response.status(error.status || 500)

  return response.send({
    error: {
      message: error.message,
      status: error.status
    }
  })
})

module.exports = app;