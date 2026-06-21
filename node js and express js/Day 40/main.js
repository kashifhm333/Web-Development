const express = require('express')
const app = express()
const fs = require('fs')
const port = 3001

const route = require('./routes/ro')

app.use('/ro', route)




// app.use(express.static('public'))

 // same way of writing the middleware
// const myLogger = function (req, res, next) {
//   console.log('LOGGED')
//   next()
// }

// app.use(myLogger)

      //if you want to write the appendFIle in a synchronous way then you can use appendFileSync instead of appendFile and it will block the event loop until the file is written, which can lead to performance issues if the file is large or if there are many requests. So it's generally recommended to use the asynchronous version (appendFile) to avoid blocking the event loop and to handle errors properly.
// app.use((req, res, next) =>{
//   console.log('M1')
// //  res.send('Hello World! from middleware 1')
//     fs.appendFile('log.txt', `${Date.now()} is ${req.method}\n`, (err) => {
//       if (err) {
//         console.error('Error writing to log file:', err);
//       }
//     });
//     console.log(`${Date.now()} is ${req.method}`);
    
//   next()
// })






app.use((req, res, next) =>{
  console.log('M1')
//  res.send('Hello World! from middleware 1')
    fs.appendFileSync('log.txt', `${Date.now()} is ${req.method}\n`)
    console.log(`${Date.now()} is ${req.method}`);
    
  next()
})


app.use((req, res, next) =>{
  console.log('M2')
  res.send('Hello World! from middleware 2')
  next()
})


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
