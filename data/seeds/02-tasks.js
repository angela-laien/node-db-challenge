
exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      description: 'read CV compiler feedback on my resume',
      notes: 'highlight what needs to be changed',
      completed: false,
      project_id: 1
    },
    {
      description: 'write draft',
      notes: 'look coinfident',
      completed: false,
      project_id: 2
    },
    {
      description: 'do mock interviews',
      notes: 'figure out where to schedule the interview',
      completed: false,
      project_id: 3
    }
  ])
};
