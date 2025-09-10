import sequelize from "./config.js";
import "./associations.js";

const ConnectDB = async () => {
  {
    try {
      await sequelize.authenticate();
      console.log("Database connection established successfully.");
      await sequelize.sync();
    } catch (error) {
      console.error("Error connecting to the database:", error);
    }
  }
};
export default ConnectDB;
