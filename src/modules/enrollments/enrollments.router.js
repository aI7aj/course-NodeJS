import { Router } from "express";
import authMiddlewareJWT from "../../middlewares/authMiddleWare.js";
import Roles from "../../../database/Roles.js";
import asyncHandler from "../../utils/asyncHandler.js";
import * as controller from "./enrollment.controller.js";
const router = Router();

router.post(
  "/:id/enroll",
  authMiddlewareJWT([Roles.ADMIN, Roles.STUDENT]),
  asyncHandler(controller.enrollInCourse)
);

router.get(
  "/myCourses",
  authMiddlewareJWT([Roles.ADMIN, Roles.STUDENT]),
  asyncHandler(controller.MyCourses)
);

export default router;
