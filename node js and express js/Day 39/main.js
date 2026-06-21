const express = require('express')
const app = express()

const birds = require('./routes/bird')
const ronaldo = require('./ronaldo/ro')

const port = 3001

app.use(express.static('public'))
app.use('/ronaldo', ronaldo)

app.use('/birds', birds)


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    console.log(`i am in post`);

    res.send('Hello World! Post')
})

app.get('/page', (req, res) => {
    res.sendFile('templates/page.html', { root: __dirname })
})

app.get('/json', (req, res) => {

    res.json({ name: 'John', age: 30, city: 'New York' });
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
