import * as courseService from "./course.service.js";
import { AppError } from "../utils/AppError.js";
import buildOrderArray from "../utils/sorting/sortQuery.js";

export const createCourse = async (req, res, next) => {
  if (!req.user || !req.user.id) {
    return next(new AppError("User not authenticated", 401));
  }
  const course = await courseService.createCourse(req.body, req.user.id);
  res.status(201).json(course);
};

export const getAllCoursesController = async (req, res, next) => {
  try {
    const allowedColumns = ["price", "title", "createdAt", "updatedAt"];
    const { sortBy, order } = req.query;

    const orderArray = buildOrderArray(sortBy, order, allowedColumns);

    if (orderArray.length === 0) {
      return res.status(400).json({ message: "Invalid sort columns or order direction" });
    }
    
    const courses = await courseService.getAllCourses(orderArray); 
    
    res.status(200).json(courses);
  } catch (err) {
    next(err);
  }
};

export const getCourseById = async (req, res, next) => {
  try {
    const course = await courseService.getCourseById(req.params.id);
    res.status(200).json(course);
  } catch (error) {
    next(error);
  }
};
export const updateCourse = async (req, res, next) => {
  try {
    const course = await courseService.updateCourse(req.params.id, req.body);
    res.status(200).json(course);
  } catch (error) {
    next(error);
  }
};
export const deleteCourse = async (req, res, next) => {
  try {
    const course = await courseService.deleteCourse(req.params.id);
    res.status(200).json(course);
  } catch (error) {
    next(error);
  }
};

export const softDeleteCourse = async (req, res, next) => {
  try {
    const course = await courseService.softDeleteCourse(req.params.id);
    res.status(200).json(course);
  } catch (error) {
    next(error);
  }
};