exports.up = function(knex, Promise) {
    return knex.schema.table('comments', function(table) {
        table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('comments', function(table) {
        table.dropTimestamps();
    })
};
