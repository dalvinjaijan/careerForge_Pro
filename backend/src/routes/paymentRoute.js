import express from "express";
import { createCheckoutSession, stripeWebhook } from "../controllers/resumeController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post(
  "/create-checkout-session",
  authMiddleware,
  createCheckoutSession
);

export default router 