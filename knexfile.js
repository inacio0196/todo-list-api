// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'todo_list',
      user: 'postgres',
      password: '0196',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/database/seeds`,
    },
  },
};
