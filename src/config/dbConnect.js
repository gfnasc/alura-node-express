import mongoose from "mongoose"

async function dbConnect() {
  mongoose.connect('mongodb+srv://gfnasc:aluraexpressmongo@bookstore.mipmv.mongodb.net/books?retryWrites=true&w=majority&appName=bookstore')
  return mongoose.connection
}

export default dbConnect
