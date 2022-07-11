const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/CleanBlog-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const blogSchema = new Schema({
  title: String,
  message: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
})

const Blog = mongoose.model('blogs', blogSchema) //Blog collection'ın ismi

module.exports = Blog
