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

export const getAllCourses = async (req, res, next) => {
  const { limit, page, offset } = getPaginiation(req);
  const allowedColumns = ["price"];
  const order = buildOrderArray(req.query.sortBy, req.query.order, allowedColumns);
  const data = await courseService.getAllCourses(order, limit, offset);
  if(data.message){
    return res.status(200).json(data);
  } else {
    const response = getPaginiationData(data, page, limit);
    return res.status(200).json({ message: "success", ...response });
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