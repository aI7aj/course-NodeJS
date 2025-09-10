import * as courseQuery from "./course.data.js";
import { AppError } from "../utils/AppError.js";

export const createCourse = async (courseData, userId) => {
  try {
    const { title, description, price } = courseData;

    if (!title || !price) {
      throw new AppError("Title and price are required", 400);
    }

    const course = await courseQuery.createCourse({
      title,
      description: description || "",
      price,
      createdBy: userId,
    });

    return {
      success: true,
      message: "Course created successfully",
      data: course,
    };
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }
    throw new AppError(error.message || "Something went wrong", 500);
  }
};

export const getAllCourses = async () => {
  const courses = await courseQuery.getAllCourses();
  return {
    success: true,
    data: courses,
  };
};

export const getCourseById = async (courseId) => {
  if (!courseId) {
    throw new AppError("Course ID is required", 400);
  }

  const course = await courseQuery.getCourseById(courseId);

  if (!course) {
    throw new AppError("Course not found", 404);
  }

  return {
    success: true,
    data: course,
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
}