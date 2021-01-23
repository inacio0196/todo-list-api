exports.up = knex => knex.schema.createTable('tasks', table => {
  table.increments('id')
  table.text('task_title').notNullable()
  table.text('task_description')

  table.integer('user_id').references('users.id').notNullable()

  table.timestamp('created_at').defaultTo(knex.fn.now())
  table.timestamp('updated_at').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable('tasks')