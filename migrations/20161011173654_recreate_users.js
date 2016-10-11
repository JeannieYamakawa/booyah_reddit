exports.up = function(knex, Promise) {
   return knex.schema.createTableIfNotExists('users', function(table){
    table.increments();
    table.string('username').unique().notNullable();
    table.string('hashed_password').notNullable();
    table.timestamps(true);
  });
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTableIfExists('users');
};
