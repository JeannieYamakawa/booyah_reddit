
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('posts-votes', function(table) {
      table.increments();
      table.integer('posts_id');
      table.foreign('posts_id').references('posts.id').onDelete('CASCADE');
      table.integer('user_id');
      table.foreign('user_id').references('users.id').onDelete('CASCADE');
      table.boolean('upvote').defaultTo(null);
      table.boolean('downvote').defaultTo(null);
      table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('posts-votes');
};
