import express from "express"
import dbConnect from "./config/dbConnect.js"
import book from "./models/Book.js"

const db = await dbConnect()

db.on('error', (error) => {
  console.error(error)
})

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.")
})

app.get('/books', async (req, res) => {
  const list = await book.find({})
  res.status(200).json(list)
})

app.get('/books/:id', (req, res) => {
  const index = searchBook(req.params.id)
  res.status(200).json(books[index])
})

app.post('/books', (req, res) => {
  books.push(req.body)
  res.status(201).json(books)
})

app.put('/books/:id', (req, res) => {
  const index = searchBook(req.params.id)
  books[index].title = req.body.title
  res.status(200).json(books)
})

app.delete('/books/:id', (req, res) => {
  const index = searchBook(req.params.id)
  books.splice(index, 1)
  res.status(200).json(books)
})

export default app