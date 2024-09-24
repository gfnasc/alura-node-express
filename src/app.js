import express from "express"
import dbConnect from "./config/dbConnect.js"

const db = await dbConnect()

db.on('error', (error) => {
  console.error(error)
})

const app = express()
app.use(express.json())

const books = [
  {
    id: 1,
    title: "Senhor dos anéis"
  },
  {
    id: 2,
    title: "O Hobbit"
  }
]

function searchBook(id) {
  return books.findIndex(book => {
    return book.id === Number(id)
  })
}

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.")
})

app.get('/books', (req, res) => {
  res.status(200).json(books)
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