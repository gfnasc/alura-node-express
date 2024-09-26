import express from "express"
import BookController from "../controllers/bookController.js"

const routes = express.Router()

routes.get('/books', BookController.list)
routes.get('/books/search', BookController.findBookByPublisher)
routes.get('/book/:id', BookController.getBookById)
routes.post('/books', BookController.create)
routes.put('/book/:id', BookController.update)
routes.delete('/book/:id', BookController.delete)

export default routes