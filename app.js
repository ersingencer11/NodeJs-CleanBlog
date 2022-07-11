const express = require('express')
const path = require('path')
const ejs=require("ejs")
const app = express()

//MIDDLEWARE
app.use(express.static('public'))
//TEMPLATE ENGINE
app.set("view engine","ejs")

//ROUTING
app.get('/', (req, res) => {
  res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/add_post',(req,res)=>{
    res.render('add_post')
})


//SERVER LISTEN
const port = 3000
app.listen(port, () => {
  console.log(`${port} portu dinleniyor`)
})

