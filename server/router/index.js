const express = require('express')
const router = express.Router()
const GhostController = require('../controller/index')

router.get('/', GhostController.findAll)

module.exports = router