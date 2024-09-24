import express from "express"
import books from "./books.js"

const routes = (app) => {
  app.route('/').get((req, res) => res.status(200).json({}))
  app.use(express.json(), books)
}

export default routes