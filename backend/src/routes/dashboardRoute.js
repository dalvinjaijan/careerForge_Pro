import express from "express";

import {

  getDashboardResumes,

  getResumeById,

  deleteResume,

  renameResume,

} from "../controllers/dashboardController.js";

import {

  authMiddleware,

} from "../middleware/authMiddleware.js";

const router =
  express.Router();

router.get(
  "/",
  authMiddleware,
  getDashboardResumes
);

router.get(
  "/:id",
  authMiddleware,
  getResumeById
);

router.delete(
  "/:id",
  authMiddleware,
  deleteResume
);

router.patch(
  "/:id",
  authMiddleware,
  renameResume
);

export default router;