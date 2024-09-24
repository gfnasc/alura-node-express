import mongoose from "mongoose"

async function dbConnect() {
  mongoose.connect(process.env.MONGO_CONNECTION)
  return mongoose.connection
}

export default dbConnect
