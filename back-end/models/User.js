const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    text: { type: String, required: true },
    day: { type: String, required: true },
    completed: { type: Boolean, default: false },
    description:{type:String , default:''}
  });

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    tasks: [TaskSchema],
})

module.exports = mongoose.model('User', UserSchema)
