
exports.seed = function(knex) {
  return knex('projects').insert([
    { 
      name: 'Revise resume', 
      description: 'Use CV compiler',
      completed: false
    },
    { 
      name: 'Make a video to introduce myself', 
      description: 'Upload to Youtube',
      completed: false
    },
    { 
      name: 'Schedule behavioral interview', 
      description: 'do STAR worksheet for preparation',
      completed: false
    },
  ])
};
