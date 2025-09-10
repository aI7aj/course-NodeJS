import express from "express";
import ConnectDB from "./database/connection.js";
import { init } from "./src/routes.js";
import { sendEmail } from "./src/utils/email/nodemailer.js";
const app = express();

const PORT = process.env.PORT || 3000;

await ConnectDB().then(() => {
  init(express, app);
  console.log("Database connected successfully.");
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
