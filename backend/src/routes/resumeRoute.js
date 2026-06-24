import express from "express";
import { generateResume, getResumeById, saveResume, uploadResume } from "../controllers/resumeController.js";
import resumeRoute from "./resumeRoute.js";
import { analyzeATS, rewriteResume } from "../controllers/resumeController.js"
import { upload } from "../middleware/upload.js";
import { checkResumeLimit } from "../middleware/checkResumeLimit.js";
import { generatePDF } from "../controllers/generatePdf.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create", generateResume);
router.post("/analyze", analyzeATS);
router.post("/rewrite", rewriteResume);
router.post(
  "/upload",
  upload.single("resume"),
  uploadResume
);

router.post(
  "/save",authMiddleware,
  checkResumeLimit,
  saveResume
);
router.get(
  "/generate-pdf/:resumeId", authMiddleware,
  
  generatePDF
);
router.get(
  "/:resumeId",
  getResumeById
);


export default router 
