import globalErrorHandler from "./middlewares/globalErrorHandlers.js";
import authRouter from "./modules/auth/auth.router.js";
import courseRouter from "./courses/course.router.js";
import enrollmentRouter from "./modules/enrollments/enrollments.router.js";
import reviewRouter from "./modules/reviews/review.router.js"
export function init(express, app) {
  app.use(express.json());
  app.use("/auth", authRouter);
  app.use("/courses", courseRouter);
  app.use("/enrollments", enrollmentRouter);
  app.use("/reviews", reviewRouter);
  app.use(globalErrorHandler);
}
