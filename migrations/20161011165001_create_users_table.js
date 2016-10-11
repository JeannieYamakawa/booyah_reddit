exports.up = function(knex, Promise) {
   knex.schema.createTableIfNotExists('users', function(table){
    table.increments();
    table.string('username').unique().notNullable();
    table.string('hashed_password').notNullable();
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
   knex.schema.dropTableIfExists('users');
};
