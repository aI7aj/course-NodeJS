import { Router } from "express";
import * as controller from "./course.controller.js";
import asyncHandler from "../utils/asyncHandler.js";
import authMiddlewareJWT from "../middlewares/authMiddleWare.js";
import Roles from "../../database/Roles.js";

const router = Router();

router.post(
  "/",
  authMiddlewareJWT([Roles.ADMIN]),
  asyncHandler(controller.createCourse)
);

router.get("/", asyncHandler(controller.getAllCoursesController));
router.get("/:id", asyncHandler(controller.getCourseById));

router.patch(
  "/soft-delete/:id",
  authMiddlewareJWT([Roles.ADMIN]),
  asyncHandler(controller.softDeleteCourse)
);

router.patch(
  "/:id",
  authMiddlewareJWT([Roles.ADMIN]),
  asyncHandler(controller.updateCourse)
);

router.delete(
  "/:id",
  authMiddlewareJWT([Roles.ADMIN]),
  asyncHandler(controller.deleteCourse)
);
export default router;
