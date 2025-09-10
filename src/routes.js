import globalErrorHandler from "../src/middlewares/globalErrorHandlers.js";
import authRouter from "./modules/auth/auth.router.js";
import courseRouter from "./courses/course.router.js";

export function init(express, app) {
  app.use(express.json());
  app.use("/auth", authRouter);
  app.use("/courses", courseRouter);
  app.use(globalErrorHandler);
}
