const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const userRoutes = require('./routes/userRoutes')
const recipeRoutes = require('./routes/recipeRoutes')

  const corsOptions = {
   origin: 'http://localhost:3000',
   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
   optionsSuccessStatus: 200
 }

// express app
const app = express()

// middleware
app.use(express.json())
app.use(cors(corsOptions));
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/user', userRoutes)
app.use('/api/recipes', recipeRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })