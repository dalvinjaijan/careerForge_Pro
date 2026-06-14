import express from "express";
import { generateResume } from "../controllers/resumeController.js";
import resumeRoute from "./resumeRoute.js";
import { analyzeATS, rewriteResume } from "../controllers/resumeController.js"

const router = express.Router();

router.post("/create", generateResume);
router.post("/analyze", analyzeATS);
router.post("/rewrite", rewriteResume);


export default router 
