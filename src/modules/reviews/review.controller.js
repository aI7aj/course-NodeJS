import * as reviewService from "./review.service.js";

const createReview = async (req, res) => {
  const { comment } = req.body;
  const { id: courseId } = req.params;
  const userId = req.user.id;

  const review = await reviewService.createReview({
    userId,
    courseId,
    comment,
  });
  res.status(201).json({
    review,
  });
};

const getReviewsByCourseId = async (req, res) => {
  const courseId = req.params.id;
  const review = await reviewService.getReviews(courseId);
  res.status(200).json({review});
};

const deleteReview = async (req, res) => {
  const id = req.params.id;
  await reviewService.deleteReview(id);
  res.status(200).json({message: "Review deleted successfully"});
}

export { createReview, getReviewsByCourseId, deleteReview };
