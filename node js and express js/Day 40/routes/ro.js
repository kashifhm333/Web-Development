const express = require('express')
const ro = express.Router()

// define the home page route
ro.use((req, res, next) =>{
  console.log('Ronaldo')
  res.send('RRRRROutes for Ronaldo')
  next()
})
ro.get('/', (req, res) => {
  res.send('Ronaldo page')
})

// define the about route
ro.get('/aboutronaldo', (req, res) => {
  res.send('About Ronaldo')
})

// define the about route
ro.get('/blogpost/:slug', (req, res) => {
  res.send(`fetch the blogpost for Ronaldo ${req.params}`)
})

module.exports = ro