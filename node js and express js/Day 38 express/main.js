const express = require('express')
const app = express()
const port = 3001

app.use(express.static('public'))
app.get('/blogs', (req, res) => {
  res.send('Blogss')
})

app.get('/blogs/:slug', (req, res) => {
  res.send(`${req.params.slug} is the slug of the blog`)
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('about')
})

app.get('/contact', (req, res) => {
  res.send('contact')
})

app.get('/ronaldo', (req, res) => {
  res.send('Ronaldo')
})

app.get('/messi', (req, res) => {
  res.send('Messi is the best football player in the world')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
