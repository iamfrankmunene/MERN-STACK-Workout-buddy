const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')


//Express App
const app = express()


//middleware
app.use(express.json())
app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts',workoutRoutes)

//connect to DB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
        console.log('Connected and server is listening on port',process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})



