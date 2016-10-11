
exports.up = function(knex, Promise) {
   return knex.schema.createTableIfNotExists('posts', function(table) {
    table.increments();
    table.text('title').notNullable();
    table.text('body').notNullable();
    table.text('link');
    table.integer('user_id').unsigned();
    table.foreign('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
    table.timestamps(true);
  })
};

exports.down = function(knex, Promise) {
   return knex.schema.DropTableIfExists('posts');
};
