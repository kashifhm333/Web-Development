// const e = require('express')
import express from 'express'
// const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('hisee home page')
})

// define the about route
router.get('/about', (req, res) => {
  res.send('About hisee')
})

// define the blog post route
router.get('/blogpost/:slug', (req, res) => {
  res.send(`fetch the blogpost for ${req.params.slug}`)
})

export default router