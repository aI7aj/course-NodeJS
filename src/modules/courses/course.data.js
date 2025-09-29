import Course from "../../../database/models/course.model.js";
import { AppError } from "../../utils/AppError.js";
import Review from "../../../database/models/review.model.js";

export const createCourse = async (courseData) => {
  const { title, price } = courseData;

  if (!title || !price) {
    throw new AppError("title and price are required", 400);
  }

  const course = await Course.create(courseData);
  return course;
};

export const getAllCourses = async (order, page, limit, offset) => {
  const courses = await Course.findAll({
    where: { isDeleted: false },
    include: [
      {
        model: Review,
        attributes: ["comment"],
      },
    ],
    attributes: ["id", "price", "title", "description"],
    order,
    limit,
    offset,
  });
  return courses;
};
export const getCourseById = async (courseId) => {
  if (!courseId) {
    throw new AppError("Course ID is required", 400);
  }
  const course = await Course.findByPk(courseId);
  return course;
};
export const updateCourse = async (courseId, updateData) => {
  if (!courseId) {
    throw new AppError("Course ID is required", 400);
  }

  const course = await Course.findByPk(courseId);

  if (!course) {
    throw new AppError("Course not found", 404);
  }

  await course.update(updateData);

  return course;
};

export const deleteCourse = async (courseId) => {
  if (!courseId) {
    throw new AppError("Course ID is required", 400);
  }

  const course = await Course.findByPk(courseId);

  if (!course) {
    throw new AppError("Course not found", 404);
  }

  await course.destroy();

  return course;
};

export const softDeleteCourse = async (courseId) => {
  const course = await Course.findByPk(courseId);
  if (!course) {

    throw new AppError("Course not found", 404);
  }
  await course.update({ isDeleted: true });
  return course;
};