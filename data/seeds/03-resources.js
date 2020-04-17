
exports.seed = function(knex) {
  return knex('resources').insert([
    {
      name: 'Google Suite',
      description: 'included in my Google account',
      project_id: 1
    },
    {
      name: 'Computer',
      description: 'Register a CV compiler account',
      project_id: 3
    },
    {
      name: 'Camera',
      description: 'Record video',
      project_id: 2
    },
  ])
};
