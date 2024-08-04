const express = require('express')
const auth = require('../middleware/auth.js')
const taskController = require('../controllers/taskController.js')

const router = express.Router()

// CRUD Operations

router.post('/tasks', auth, taskController.addTask)

router.get('/tasks', auth, taskController.getTasks)

router.put('/tasks/:taskId', auth, taskController.updateTask)

router.delete('/tasks/:taskId', auth, taskController.deleteTask)


module.exports = router
