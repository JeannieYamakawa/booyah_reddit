
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('comments-votes', function(table) {
      table.increments();
      table.integer('posts_id');
      table.foreign('posts_id').references('posts.id');
      table.integer('user_id');
      table.foreign('user_id').references('users.id');
      table.boolean('upvote').defaultTo(null);
      table.boolean('downvote').defaultTo(null);
      table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('post-votes');
};
