import express from "express"
import dbConnect from "./config/dbConnect.js"
import routes from "../routes/index.js"

const db = await dbConnect()

db.on('error', (error) => {
  console.error(error)
})

const app = express()
routes(app)

export default app