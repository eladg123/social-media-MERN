const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')

//import routes
const userRoutes = require('./routes/userRoutes')
const authRoutes = require('./routes/authRoutes')

dotenv.config()

// connect to mongoDB
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('connected to MONGO')
  },
)

//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

//routes:
app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)

// strat the server
app.listen(8800, () => {
  console.log('Backend server is running')
})
