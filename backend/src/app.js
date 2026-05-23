import express from "express"
import  {connectDb}  from "./config/mongoDb.js"
const app = express()

connectDb()

export default app