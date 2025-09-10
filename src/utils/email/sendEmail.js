import { AppError } from "./../AppError.js";
import { sendEmail } from "./nodemailer.js";
import {
    VERIFICATION_EMAIL_TEMPLATE,
    PASSWORD_RESET_REQUEST_TEMPLATE,
} from "./emailTemplates.js";
export async function sendSysEmail(type, email, value) {
    let subject = "";
    let html = "";

    if (type === "CONFIRMATION") {
        subject = "Please confirm your email"
        html = VERIFICATION_EMAIL_TEMPLATE.replace("%%VERIFICATION_CODE%%", value)
    } else if (type === "RESET_PASSWORD") {
        subject = "Reset your password"
        html = PASSWORD_RESET_REQUEST_TEMPLATE.replace("%%RESET_URL%%", value)
    } else {
        throw new AppError("Invalid email type", 400)
    }

    await sendEmail({
        to: email,
        subject,
        html,
    });
};
