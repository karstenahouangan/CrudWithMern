const express = require('express')
const Todo = require('../models/Todo')
const router = express.Router()
router.get('/', (req, resp)=>{
    Todo.find().then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({message : e})
    })
})
router.post('/', (req, resp)=>{
    const todo = new Todo({
        title: req.body.title,
        description: req.body.description,
        done: false
    })
    todo.save().then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({message: e})
    })
})
router.patch('/:id', (req, resp) => {
    Todo.updateOne({_id: req.params.id}, {
            $set: {
                title: req.body.title, 
                description: req.body.description, 
                done: req.body.done
            }
        }).then(data => {
                resp.json(data)
        }).catch(e => {
                resp.json({message: e})
        })
})
router.delete('/:id', (req, resp)=>{
    Todo.deleteOne({_id: req.params.id})
    .then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({message: e})
    })
})
module.exports = router;