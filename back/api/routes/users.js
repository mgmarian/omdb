const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const checkJWT = require('../utils/checkJwt')


const { User } = require('../models')


router.get('/', checkJWT, (req, res, next) => {
    User.findAll()
        .then(users => res.status(200).json(users))
        .catch(next)
})


router.post('/register', (req, res, next) => {
    User.create(req.body)
        .then((res) => console.log(res))
        .catch(next)
})

router.post('/login', (req, res, next) => {
    const {email, password} = req.body;
    User.findOne({
        where: { email }
    })
        .then(user => { 
            // Si niega el user significa que no encontro el email en el where
            if (!user) return res.status(404).send('El usuario no existe');
            if (!user.validPassword(password)) return res.status(401).send('Pass incorrecto');
            const token = jwt.sign({ email, exp: Math.floor(Date.now() / 1000) + 60 * 60 }, 'omdb');
            return res.status(200).json({ token, user }) // Envía a network
        })
})

module.exports = router;    