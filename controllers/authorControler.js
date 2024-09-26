import author from "../src/models/Author.js"

class AuthorController {
  static async list (req, res) {
    try {
      const list = await author.find({})
      res.status(200).json(list)
    } catch (error) {
      res.status(500).json({ message: `${error.message} - List authors failed` })
    }
  }

  static async getAuthorById (req, res) {
    try {
      const findAuthor = await author.findById(req.params.id)
      res.status(200).json(findAuthor)
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Get author failed` })
    }
  }

  static async create (req, res) {
    try {
      const newAuthor = await author.create(req.body)
      res.status(201).json({ message: 'Created with success!', author: newAuthor })
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Create author failed` })
    }
  }

  static async update (req, res) {
    try {
      await author.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).json({ message: `Update author success` })
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Get author failed` })
    }
  }

  static async delete (req, res) {
    try {
      await author.findByIdAndDelete(req.params.id)
      res.status(200).json({ message: `Delete author success` })
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Delete author failed` })
    }
  }
}

export default AuthorController
