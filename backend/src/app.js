import express from "express"
import  {connectDb}  from "./config/mongoDb.js"
import dotenv from 'dotenv'
import cors from "cors";
import cookieParser from "cookie-parser"
import resumeRoute from './routes/resumeRoute.js'
import authRoute from './routes/authRoute.js'



dotenv.config()

const app = express()

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json())
app.use(cookieParser())
connectDb()

app.use('/api/resume',resumeRoute)
app.use('/api/auth',authRoute)

export default app