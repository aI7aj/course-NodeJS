import * as EnrollmentService from "./enrollments.service.js";

export const enrollInCourse = async (req, res, next) => {
  const courseId = req.params.id;
  const userId = req.user.id;
  console.log(`User ${userId} is enrolling in course ${courseId}`);
  const enrollment = await EnrollmentService.enrollInCourse(userId, courseId);
  res.status(201).json(enrollment);
};
export const MyCourses = async (req, res, next) => {
  const userId = req.user.id;
  const courses = await EnrollmentService.MyCourses(userId);
  res.status(200).json(courses);
};
