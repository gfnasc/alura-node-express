import book from "../src/models/Book.js"

class BookController {
  static async list (req, res) {
    try {
      const list = await book.find({})
      res.status(200).json(list)
    } catch (error) {
      res.status(500).json({ message: `${error.message} - List books failed` })
    }
  }

  static async create (req, res) {
    try {
      const newBook = await book.create(req.body)
      res.status(201).json({ message: 'Created with success!', book: newBook })
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Create book failed` })
    }
  }
}

export default BookController
