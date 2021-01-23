
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          task_title: 'Tarefa1',
          task_description: 'Descrição da tarefa 1',
          user_id: 1,
        },
        {
          task_title: 'Tarefa2',
          task_description: 'Descrição da tarefa 2',
          user_id: 2,
        },
      ]);
    });
};
