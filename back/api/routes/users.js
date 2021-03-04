const express = require('express');
const router = express.Router()

const { User } = require('../models')


router.get('/', (req, res, next) => {
    User.findAll()
        .then(user => res.status(200).json(user))
        .catch(next)
})


router.post('/register', (req, res, next) => {
    User.create(req.body)
        .then(() => res.sendStatus(201))
        .catch(next)
})

router.post('/login', (req, res, next) => {
    User.findOne({
        where: {
            email: req.body.email
        }   
    }
    )
        .then(user => console.log(user))
        .catch(next)
})




module.exports = router;    