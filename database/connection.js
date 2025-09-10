import sequelize from "./config.js";
import "./associations.js";

const ConnectDB = async () => {
  {
    try {
      await sequelize.authenticate();
      console.log("connected to database");
      await sequelize.sync();
    } catch (error) {
      console.error("error connecting to the database:", error);
    }
  }
};
export default ConnectDB;
