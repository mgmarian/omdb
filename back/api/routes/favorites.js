const express = require('express');
const router = express.Router();
const { Favorite } = require('../models')

router.post('/', (req, res, next) => {
    Favorite.create()
        .then(users => res.status(200).json(users))
        .catch(next)
})

module.exports = router;