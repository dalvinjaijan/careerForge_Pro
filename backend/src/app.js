import express from "express"
import  {connectDb}  from "./config/mongoDb.js"
import dotenv from 'dotenv'
import cors from "cors";
import cookieParser from "cookie-parser"
import resumeRoute from './routes/resumeRoute.js'
import authRoute from './routes/authRoute.js'
import paymenRoute from './routes/paymentRoute.js'
import dashboardRoute from './routes/dashboardRoute.js'

import { stripeWebhook } from "./controllers/resumeController.js";





dotenv.config()

const app = express()

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(cookieParser())
app.post(
  "/api/payment/webhook",
  express.raw({
    type: "application/json",
  }),
  stripeWebhook
);
app.use(express.json())

connectDb()

app.use('/api/resume',resumeRoute)
app.use('/api/auth', authRoute)
app.use('/api/payment',paymenRoute)
app.use(
  "/api/dashboard",
  dashboardRoute
);

export default app 