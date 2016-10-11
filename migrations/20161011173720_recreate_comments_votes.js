exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('comments-votes', function(table) {
        table.increments();
        table.integer('comment_id');
        table.foreign('comment_id').references('comments.id').onDelete('CASCADE');
        table.integer('user_id');
        table.foreign('user_id').references('users.id').onDelete('CASCADE');
        table.boolean('upvote').defaultTo(null);
        table.boolean('downvote').defaultTo(null);
        table.timestamps();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('comments-votes');
};
