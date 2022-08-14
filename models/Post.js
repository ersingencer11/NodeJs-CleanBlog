const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/CleanBlog-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,

})

const postSchema = new Schema({
  title: String,
  message: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
})

const Post = mongoose.model('posts', postSchema) //Blog collection'ın ismi

module.exports = Post
