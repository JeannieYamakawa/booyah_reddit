
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('posts').insert({id: 1, title: 'whatisthis?', body: 'seriously guys, what are we doing here, making this reddit clone for the like the 5th time', link: 'www.reddit.com', user_id: 1}),
        knex('posts').insert({id: 2, title: 'whoarewe?', body: 'this is like blowing my mind recently',link: 'www.google.com',user_id: 2}),
        knex('posts').insert({id: 3, title: 'whyisthis?', body: 'why are you the way that you are', link: 'www.facebook.com', user_id: 2}),
        knex('posts').insert({id: 4, title: 'whereisthis?', body: 'who did he tell you that to?', link: 'www.whoareyouwhowho.com', user_id: 3}),
        knex('posts').insert({id: 5, title: 'howisthis?', body: 'how do you know if you stubbed your toe?', link: 'www.health.com', user_id: 3}),
        knex('posts').insert({id: 6, title: 'isthisreallythis?', body: 'lolololololololol', link: 'www.lol.com', user_id: 4}),
        knex('posts').insert({id: 7, title: 'imronburgundy?', body: 'i love lamp', link: 'www.anchorman.com', user_id: 4}),
      ]);
    });
};
