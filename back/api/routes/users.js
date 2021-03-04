const express = require('express');
const router = express.Router()
const { User } = require('../models')


router.post('/', (req, res, next) => {
    User.create(req.body)
        .then(user => res.status(201).send( user))
        .catch(next)
})


router.get('/', (req, res, next) => {
    User.findAll()
        .then(user => res.status(200).json(user))
        .catch(next)
})


module.exports = router;    