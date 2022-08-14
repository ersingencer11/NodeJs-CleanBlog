const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect("mongodb+srv://ersin:database@cluster0.xzcixfs.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log('DB CONNECTED')
}).catch((err)=>{
  console.log(err)
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
