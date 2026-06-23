import express from "express";
import { generateResume, saveResume, uploadResume } from "../controllers/resumeController.js";
import resumeRoute from "./resumeRoute.js";
import { analyzeATS, rewriteResume } from "../controllers/resumeController.js"
import { upload } from "../middleware/upload.js";
import { checkResumeLimit } from "../middleware/checkResumeLimit.js";

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
  "/save",
  checkResumeLimit,
  saveResume
);


export default router 
