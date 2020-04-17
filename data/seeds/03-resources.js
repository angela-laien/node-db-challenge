
exports.seed = function(knex) {
  return knex('resources').insert([
    {
      name: 'Google Suite',
      description: 'included in my Google account'
    },
    {
      name: 'Computer',
      description: 'Register a CV compiler account'
    },
    {
      name: 'Camera',
      description: 'Record video'
    },
  ])
};
