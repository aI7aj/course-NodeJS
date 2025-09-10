import { AppError } from "../../utils/AppError.js";
import { isUserEnrolled } from "../enrollments/enrollments.data.js";
import * as reviewQuery from "./review.data.js";

const createReview = async ({ userId, courseId, comment }) => {
  const enroll = await isUserEnrolled({ userId, courseId });

  if (!enroll) {
    throw new AppError("User is not enrolled in this course");
  }
  const existingReview = await reviewQuery.findReviewsByCourseId({
    userId,
    courseId,
  });
  if (existingReview) {
    throw new AppError("User has already reviewed this course");
  }
  return await reviewQuery.createReview({ userId, courseId, comment });
};

const getReviews = async (courseId) => {
  return await reviewQuery.getReviews({ courseId });
};

const deleteReview = async (id) => {
  const review = await reviewQuery.findReviewsById(id);
  if (!review) {
    throw new AppError("Review not found", 404);
  }
  const deleted = await reviewQuery.deleteReview(id);
  if (!deleted) {
    return;
  } else {
    return await reviewQuery.deleteReview(id);
  }
};


export { createReview, getReviews, deleteReview };
