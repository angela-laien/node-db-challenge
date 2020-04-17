const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    add,
    findTasks,
    findResources,
    addTask,
    addResource
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

async function addTask(task, project_id) {
    const newTask = {...task, project_id};
    const [id] = await db('tasks').insert(newTask, 'id');
    return db('tasks').where('id', id)
}

async function addResource(resource, project_id) {
    const newResource = {...resource, project_id};
    const [id] = await db('resources').insert(newResource, 'id');
    return db('Resources').where('id', id)
}