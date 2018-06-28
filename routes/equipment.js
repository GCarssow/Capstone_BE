const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

//list
router.get('/', (req, res, next) => {
    queries.listEquipment().then(equipment => {
        res.json({ equipment })
    }).catch(next)
})

module.exports = router