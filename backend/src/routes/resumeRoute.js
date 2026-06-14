import express from "express";
import { generateResume } from "../controllers/resumeController.js";
import resumeRoute from "./resumeRoute.js";

const router = express.Router();

router.post("/create", generateResume);

export default router;
