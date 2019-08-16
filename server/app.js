const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const ghostRouter = require('./router/')

app.use(cors())

mongoose.connect('mongodb+srv://ghostAdmin:mypassword@mflix-w8mhl.mongodb.net/ghost_image?retryWrites=true&w=majority', { useNewUrlParser : true })
.then(() => {
    console.log(`Connect to mongoose database`)
})
.catch(err => {
    console.log(err)
})

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(express.static('public'))

app.use('/ghost', ghostRouter)

app.use((err, req, res, next) => {
    if(!err.status) {
        err.status = 500
    }
    res.status(err.status).json({message: err.message})
})

app.listen(PORT, () => console.log("listening to port" + PORT))