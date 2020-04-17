const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.find()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
  });
  
  router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    Projects.findById(id)
    .then(project => {
      if (project) {
        res.json(project);
      } else {
        res.status(404).json({ message: 'Could not find project with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get project' });
    });
  });
  
  router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;
  
    Projects.findTasks(id)
    .then(tasks => {
      if (tasks.length) {
        res.json(tasks);
      } else {
        res.status(404).json({ message: 'Could not find tasks for given project' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks' });
    });
  });

  router.get('/:id/resources', (req, res) => {
    const { id } = req.params;
  
    Projects.findResources(id)
    .then(resources => {
      if (resources.length) {
        res.json(resources);
      } else {
        res.status(404).json({ message: 'Could not find resources for given project' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resources' });
    });
  });
  
  router.post('/', (req, res) => {
    const projectData = req.body;
  
    Projects.add(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new project' });
    });
  });

  router.post('/:id/tasks', (req, res) => {
    const taskData = req.body;
    const { id } = req.params; 
  
    Projects.findById(id)
    .then(project => {
      if (project) {
        Projects.addTask(taskData, id)
        .then(task => {
          res.status(201).json(task);
        })
      } else {
        res.status(404).json({ message: 'Could not find project with given id.' })
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new task' });
    });
  });

  router.post('/:id/resources', (req, res) => {
    const resourceData = req.body;
    const { id } = req.params; 
  
    Projects.findById(id)
    .then(project => {
      if (project) {
        Projects.addResource(resourceData, id)
        .then(resource => {
          res.status(201).json(resource);
        })
      } else {
        res.status(404).json({ message: 'Could not find project with given id.' })
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new resource' });
    });
  });

  module.exports = router;