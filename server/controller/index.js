const Ghost = require('../models/ghostModel')

class GhostController {
    static findAll (req, res, next) {
        Ghost.find()
        .then(data => {
            res.status(200).json({ data })
        })
        .catch(next)
    }
}

module.exports = GhostController