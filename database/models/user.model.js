import sequelize from "../../database/config.js";
import { DataTypes } from "sequelize";

const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active",
    },
    codeVerification: {
      type: DataTypes.STRING,
    },
    isConfirmed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    role:{
      type: DataTypes.ENUM("student", "admin"),
      defaultValue: "student",
    }
  },
  {
    timestamps: true,
  }
);

export default User;
