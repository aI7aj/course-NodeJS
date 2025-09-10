import * as enrollmentsQuery from "./enrollments.data.js";

export const enrollInCourse = async (userId, courseId) => {
  const existEnrollment = await enrollmentsQuery.findEnrollment(
    userId,
    courseId
  );
  if (existEnrollment) {
    throw new Error("User is already enrolled in this course");
  }
  return await enrollmentsQuery.createEnrollment(userId, courseId);
};

export const MyCourses = async (userId) => {
    const courses = await enrollmentsQuery.findEnrollments(userId);
    return courses;
}
