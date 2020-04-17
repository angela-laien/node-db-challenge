const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    add,
    findTasks,
    findResources
};

function find() {
    return db('projects');
}

function findById(id) {
    return db('projects')
        .where({ id })
        .first();
}

function add(project) {
    return db('projects').insert(project);
}

function findTasks(id) {
    // select * from projects joins tasks on projects.id = tasks.project_id;
    return db.select('*').from('projects')
        .join('tasks', 'projects.id', 'tasks.project_id')
        .where('projects.id', id)
}

function findResources(id) {
    // select * from projects joins resources on projects.id = resources.project_id;
    return db.select('*').from('projects')
        .join('resources', 'projects.id', 'resources.project_id')
        .where('projects.id', id)
}