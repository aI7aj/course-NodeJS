import Enrollment from "../../../database/models/enrollment.model.js";
import Course from "../../../database/models/course.model.js";

export const findEnrollment = async (userId, courseId) => {
  return await Enrollment.findOne({
    where: { userId, courseId },
  });
};

export const createEnrollment = async (userId, courseId) => {
  const enrollment = await Enrollment.create({ userId, courseId });
  return enrollment;
};

export const findEnrollments = async (userId) => {
  return await Enrollment.findAll({
    where: { userId },
    include: [
      {
        model: Course,
        as: "courseDetails",
        attributes: ["id", "title", "description"],
      },
    ],
  });
};

export const isUserEnrolled = async ({userId, courseId}) => {
  const enrollment = await Enrollment.findOne({
    where: { userId, courseId },
  });
  return !!enrollment;
};
