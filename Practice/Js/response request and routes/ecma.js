import express from 'express'
const app = express()
const port = 3000
import hisee from './route/hisee.js'
app.use('/hi',hisee)
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.redirect('/hi/about'); 
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
