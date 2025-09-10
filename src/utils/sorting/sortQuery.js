import { AppError } from "../AppError.js";

export default function buildOrderArray(sortByRaw, orderRaw, allowedColumns = []) {
  const sortBy = sortByRaw?.split(",") || ["createdAt"];
  const order = orderRaw?.split(',') || ["DESC"];

  const orderArray = [];
  sortBy.forEach((col, index) => {
    if (allowedColumns.length && !allowedColumns.includes(col)) {
      throw new AppError(`Invalid sortBy column: ${col}`, 400);
    }
    const dir = (order[index] || "DESC").toUpperCase();
    if (!["ASC", "DESC"].includes(dir)) {
      return;
    }
    orderArray.push([col, dir]);
  });

  return orderArray;
};

