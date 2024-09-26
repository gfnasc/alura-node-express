import express from "express"
import AuthorController from "../controllers/authorControler.js"

const routes = express.Router()

routes.get('/authors', AuthorController.list)
routes.get('/author/:id', AuthorController.getAuthorById)
routes.post('/authors', AuthorController.create)
routes.put('/author/:id', AuthorController.update)
routes.delete('/author/:id', AuthorController.delete)

export default routes