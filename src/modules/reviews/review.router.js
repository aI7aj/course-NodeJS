import { Router } from "express";
import authMiddlewareJWT from "../../middlewares/authMiddleWare.js";
import Roles from "../../../database/Roles.js";
import asyncHandler from "../../utils/asyncHandler.js";
import * as controller from "./review.controller.js";
const router = Router();

router.post(
  "/courses/:id",
  authMiddlewareJWT([Roles.ADMIN, Roles.STUDENT]),
  asyncHandler(controller.createReview)
);
router.get("/courses/:id", asyncHandler(controller.getReviewsByCourseId));

router.delete("/:id", authMiddlewareJWT([Roles.ADMIN]), asyncHandler(controller.deleteReview));
export default router;
