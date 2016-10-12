exports.up = function(knex, Promise) {
    return knex.schema.table('users', function(table) {
        table.dropTimestamps();
        table.timestamps(true, true);
    })

};

exports.down = function(knex, Promise) {
    return knex.schema.table('users', function(table) {
        table.dropTimestamps();
        table.timestamps(true);
    })

};
