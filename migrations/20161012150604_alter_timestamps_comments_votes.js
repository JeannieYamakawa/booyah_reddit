exports.up = function(knex, Promise) {
    return knex.schema.table('comments-votes', function(table) {
        table.dropTimestamps();
    }).then(function() {
        knex.schema.table('comments-votes', function(table) {
            table.timestamps(true, true);
        })
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('comments-votes', function(table) {
        table.dropTimestamps();
    }).then(function() {
        knex.schema.table('comments-votes', function(table) {
            table.timestamps(true);
        })
    })
};
