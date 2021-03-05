const express = require ('express');
const router = express.Router()

const routerUsers = require ('./users')
const routerFavorites = require ('./favorites')

router.use('/users', routerUsers)
router.use('/favorites', routerFavorites)

module.exports = router;