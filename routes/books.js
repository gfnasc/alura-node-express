import express from "express"
import BookController from "../controllers/bookController.js"

const routes = express.Router()

routes.get('/books', BookController.list)
routes.post('/books', BookController.create)

export default routes