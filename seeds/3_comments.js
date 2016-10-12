
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('comments').insert({id: 1, post_id: 1,user_id: 2,body: 'lammeeeeeee!'}),
        knex('comments').insert({id: 2, post_id: 2,user_id: 1,body: 'sauuceeee!'}),
        knex('comments').insert({id: 3, post_id: 3,user_id: 3,body: 'oh hai there!'}),
        knex('comments').insert({id: 4, post_id: 4,user_id: 4,body: 'i find this rather shallow and pedantic!'}),
        knex('comments').insert({id: 5, post_id: 5,user_id: 2,body: 'afeawfe!'}),
        knex('comments').insert({id: 6, post_id: 6,user_id: 1,body: 'this is nonsense!'}),
        knex('comments').insert({id: 7, post_id: 7,user_id: 3,body: 'you are a butt!'}),
        knex('comments').insert({id: 8, post_id: 1,user_id: 4,body: 'you like donkeys, dont you?!'}),
        knex('comments').insert({id: 9, post_id: 2,user_id: 2,body: 'alpacas for lyfe!'}),
        knex('comments').insert({id: 10, post_id: 3,user_id: 1,body: 'go ride a roller coaster!'}),
      ]);
    });
};
