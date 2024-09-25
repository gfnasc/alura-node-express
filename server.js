import "dotenv/config"
import app from "./src/app.js"

app.listen(process.env.APP_PORT, () => {
  console.log(`listen on http://localhost:${process.env.APP_PORT}`)
})