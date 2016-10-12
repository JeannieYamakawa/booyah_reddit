exports.up = function(knex, Promise) {
    return knex.schema.table('posts-votes', function(table) {
        table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('posts-votes', function(table) {
        table.dropTimestamps();
    })
};
