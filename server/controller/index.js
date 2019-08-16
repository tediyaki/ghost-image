const Ghost = require('../models/ghostModel')

class GhostController {
    static findAll (req, res, next) {
        Ghost.find()
        .then(data => {
            res.status(200).json({ data })
        })
        .catch(next)
    }

    static postImage (req, res, next) {
        Ghost.create({title: req.body.title, link: req.file.cloudStoragePublicUrl})
            .then(ghost => {
                res.status(201).json(ghost)
            })
            .catch(next)
    }
}

module.exports = GhostController