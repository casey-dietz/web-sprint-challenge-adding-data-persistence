// build your `/api/tasks` router here
const express = require('express')
const tasks = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    tasks.getTask()
        .then(task => {
            res.status(200).json(task)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    tasks.createTask(req.body)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(next);
})


module.exports = router
