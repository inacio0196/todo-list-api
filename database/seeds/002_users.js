
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'Rafael',
          email: 'rafael.inacio0196@gmail.com',
        },
        {
          name: 'Eliana',
          email: 'eliana.inacio0196@gmail.com',
        },
        {
          name: 'Ethan',
          email: 'ethan.inacio0196@gmail.com',
        },
      ]);
    });
};
