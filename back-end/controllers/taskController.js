const mongoose = require('mongoose');
const User = require('../models/User');

exports.addTask = async (req, res) => {
    const { text, description, day, completed } = req.body;
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        const newTask = { text, description, day, completed };
        user.tasks.push(newTask);
        await user.save();

        res.json(user.tasks);
    } catch (err) {
        res.status(500).send();
    }
};

exports.getTasks = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('tasks');
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        res.json(user.tasks);
    } catch (err) {
        res.status(500).send();
    }
};

exports.updateTask = async (req, res) => {
    const { text, description, day, completed } = req.body;
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        const task = user.tasks.id(req.params.taskId);
        if (!task) {
            return res.status(404).json({ msg: 'Task not found' });
        }

        task.text = text || task.text;
        task.day = day || task.day;
        task.description = description !== undefined ? description : task.description
        task.completed = completed !== undefined ? completed : task.completed;

        await user.save();

        res.json(task);
    } catch (err) {
        res.status(500).send();
    }
};

exports.deleteTask = async (req, res) => {
    try {
      const userId = req.user.id;
      const taskId = req.params.taskId;
  
      if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ msg: 'Invalid user ID' });
      }
      if (!mongoose.Types.ObjectId.isValid(taskId)) {
        return res.status(400).json({ msg: 'Invalid task ID' });
      }

      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }
  

      const taskIndex = user.tasks.findIndex(task => task.id === taskId);
      if (taskIndex === -1) {
        return res.status(404).json({ msg: 'Task not found' });
      }


      user.tasks.splice(taskIndex, 1);
  
      await user.save();
  
      res.json({ msg: 'Task removed' });
    } catch (err) {
      console.error('Error deleting task:', err);
      res.status(500).json({ msg: 'Server error', error: err.message });
    }
  };