import express from "express"
import { createResume } from "../controllers/resumeController"

const router = express.Router()

router.post("/create",createResume)

export default router