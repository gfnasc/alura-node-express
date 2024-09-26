import express from "express"
import books from "./books.js"
import authors from "./authors.js"

const routes = (app) => {
  app.route('/').get((req, res) => res.status(200).json({}))
  app.use(express.json(), books)
  app.use(express.json(), authors)
}

export default routes