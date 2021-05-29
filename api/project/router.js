// build your `/api/projects` router here
const express = require('express')
const projects = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    projects.getProjects()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    projects.createProjects(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(next)
})


module.exports = router