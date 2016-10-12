
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, username: 'Tim', hashed_password: 'password'}),
        knex('users').insert({id: 2, username: 'Taylor', hashed_password: 'password'}),
        knex('users').insert({id: 3, username: 'Tosin', hashed_password: 'password'}),
        knex('users').insert({id: 4, username: 'Jeannie', hashed_password: 'password'}),
      ]);
    });
};
