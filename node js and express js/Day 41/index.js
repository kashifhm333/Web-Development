const express = require('express')
const app = express()
const port = 3001

app.set('view engine','ejs')

// first way to do
// app.get('/', (req, res) => {
//     let siteName = "Cars"
//     let searchText = "Search Now"
//   res.sendFile("cars/index.html", { root: __dirname })
// })

// second way to do
app.get('/', (req, res) => {
    let siteName = "Addidas"
    let searchText = "Search Now"
    res.render("index", { siteName: siteName, searchText: searchText })
})


// app.get('/blog/:slug', (req, res) => {

//     let blogTitle = "Blog Title"
//     let blogContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
//   res.render("cars/index.html", { blogTitle: blogTitle, blogContent: blogContent })
// })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
