const express = require('express')
const path = require('path')
const ejs = require('ejs')
const app = express()
const Blog = require('./models/Blog')

//MIDDLEWARE
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true })) //Formdan veri almak için
app.use(express.json()) //Formdan veri almak için

//TEMPLATE ENGINE
app.set('view engine', 'ejs')

//ROUTING
app.get('/', async (req, res) => {
  const blogs = await Blog.find()
  res.render('index', { blogs })
})
app.get('/about', (req, res) => {
  res.render('about')
})
app.get('/add_post', (req, res) => {
  res.render('add_post')
})

//DATABASE
app.post('/blogs', async (req, res) => {
  await Blog.create(req.body)
  res.redirect('/')
})
app.get('/posts/:id', async (req, res) => {
  const post = await Blog.findById(req.params.id)
  res.render('post', { post })
})

//SERVER LISTEN
const port = 3000
app.listen(port, () => {
  console.log(`${port} portu dinleniyor`)
})
