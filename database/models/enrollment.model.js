import sequelize from "../../database/config.js";
import { DataTypes } from "sequelize";

const enrollment = sequelize.define(
  "enrollment",
  {
    courseId: {
      type: DataTypes.INTEGER,
      references: {
        model: "courses",
        key: "id",
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id",
      },
    },
  },
  {
    timestamps: true,
  }
);

export default enrollment;
