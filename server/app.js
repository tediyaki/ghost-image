const express = require('express')
const app = express()
const cors = require('cors')
const multer = require('multer')
const upload = multer({ dest: './public/images' })
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(express.static('public'))

app.post('/image', upload.single('image'), (req, res, next) => {
    res.json({message: "upload berhasil"})
})

app.use((err, req, res, next) => {
    if(!err.status) {
        err.status = 500
    }
    res.send(err.status).json({message: err.message})
})

app.listen(PORT, () => console.log("listening to port" + PORT))