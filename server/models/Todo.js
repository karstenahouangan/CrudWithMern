const mongoose = require('mongoose')
const TodoSchema = mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    description:{
        type: String
    },
    done:{
        type: Boolean,
        required: true
    }
})
module.exports = mongoose.model('todos', TodoSchema)