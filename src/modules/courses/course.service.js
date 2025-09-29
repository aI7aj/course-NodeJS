import * as courseQuery from "./course.data.js";
import { AppError } from "../../utils/AppError.js";

export const createCourse = async (course) => {
  const { title, price } = course;
  if (!title || !price) {
    throw new AppError("Title and price are required", 400);
  }
  const newCourse = await courseQuery.createCourse(course);
  return newCourse;
};

export const getAllCourses = async (order) => {
  const courses = await courseQuery.getAllCourses(order);
  if (courses.count === 0) {
    return {
      message: "No courses found",
    };
  }
  return courses;
};

export const getCourseById = async (courseId) => {
  if (!courseId) {
    throw new AppError("Course ID is required", 400);
  }

  const course = await courseQuery.getCourseById(courseId, {
    where: {
      isDeleted: false
    }
  })
  if (!course) {
    throw new AppError("Course not found", 404);
  }

  return {
    course: {
      id: course.id,
      title: course.title,
      description: course.description,
      price: course.price,
    },
  };
};
export const updateCourse = async (courseId, updateData) => {
  if (!courseId) {
    throw new AppError("Course ID is required", 400);
  }

  const course = await courseQuery.updateCourse(courseId, updateData);

  if (!course) {
    throw new AppError("Course not found", 404);
  }

  return {
    success: true,
    message: "Course updated successfully",
    data: course,
  };
};
export const deleteCourse = async (courseId) => {
  const course = await courseQuery.getCourseById(courseId);

  if (!course) {
    throw new AppError("Course not found", 404);
  }
  await courseQuery.deleteCourse(courseId);

  return {
    success: true,
    message: "Course deleted successfully",
  };
};

export const softDeleteCourse = async (courseId) => {
  const course = await courseQuery.getCourseById(courseId);
  if (!course) {
    throw new AppError("Course not found", 404);
  }
  await courseQuery.softDeleteCourse(courseId);

  return {
    success: true,
    message: "Course soft deleted successfully",
  };
};