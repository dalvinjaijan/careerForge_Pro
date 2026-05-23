import express from "express"
import  {connectDb}  from "./config/mongoDb.js"
import dotenv from 'dotenv'
dotenv.config()

const app = express()


connectDb()

export default app