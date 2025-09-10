import Review from "../../../database/models/review.model.js";

const findReviewsById = async (id) => {
  return await Review.findByPk(id);
};

const createReview = async ({ userId, courseId, comment }) => {
  return await Review.create({ userId, courseId, comment });
};

const findReviewsByCourseId = async ({ userId, courseId }) => {
  return await Review.findOne({
    where: { userId, courseId },
  });
};

const getReviews = async (courseId) => {
  return await Review.findAll({
    where: courseId,
  });
};
const deleteReview = async (id) => {
  return await Review.destroy({
    where: { id },
  });
};

export {
  findReviewsByCourseId,
  createReview,
  getReviews,
  findReviewsById,
  deleteReview,
};
