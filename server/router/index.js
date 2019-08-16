const express = require('express')
const router = express.Router()
const {sendUploadToGCS} = require('../middlewares/google-cloud')

const Multer = require('multer')
const multer = Multer({
        storage: Multer.MemoryStorage,
        limits: {
          fileSize: 5 * 1024 * 1024
        }
      })

const GhostController = require('../controller/index')


router.post('/image', multer.single('image'), sendUploadToGCS, GhostController.postImage)
router.get('/', GhostController.findAll)

module.exports = router