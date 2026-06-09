import express from "express"
import { analyzeATS, createResume, rewriteResume } from "../controllers/resumeController.js"

const router = express.Router()

router.post("/create",createResume)
router.post("/analyze", analyzeATS);
router.post("/rewrite", rewriteResume);


export default router 