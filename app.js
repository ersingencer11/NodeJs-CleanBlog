const express = require('express')
const path = require('path')
const ejs = require('ejs')
const app = express()
const Post = require('./models/Post')
const postController = require('./controller/postControllers')
const pageController = require('./controller/pageControllers')
const methodOverride = require('method-override')

//MIDDLEWARE
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true })) //Formdan veri almak için
app.use(express.json()) //Formdan veri almak için
app.use(methodOverride('_method',{
  methods:['POST','GET']
}))

//TEMPLATE ENGINE
app.set('view engine', 'ejs')

//ROUTING
app.get('/about', pageController.getAboutPage)
app.get('/add_post', pageController.getAddPostPage)

app.get('/', postController.getAllPosts)
app.post('/createPost', postController.createPost)
app.get('/posts/:id', postController.getPost)
app.put('/posts/:id', postController.updatePost)
app.delete('/posts/:id', postController.deletePost)
app.get('/posts/edit/:id', postController.getPostEdit)

//SERVER LISTEN
const port = process.env.port || 5000
app.listen(port, () => {
  console.log(`${port} portu dinleniyor`)
})
