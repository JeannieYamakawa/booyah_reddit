
exports.up = function(knex, Promise) {
  return  knex.schema.createTableIfNotExists('comments', function (table) {
    table.increments();
    table.integer('post_id').unsigned();
    table.foreign('post_id').references('id').inTable('posts').onDelete('CASCADE');
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
    table.string('body');
    table.timestamps(true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('comments');
};
