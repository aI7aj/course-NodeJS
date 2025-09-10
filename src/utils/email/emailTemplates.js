export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Please Verify Your Email Address</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #000; color: #fff; margin: 0; padding: 0;">
  <div style="padding: 20px; text-align: center;">
    <h1 style="color: #fff;"> al7aj test course project</h1>
    <h2 style="color: #fff;">Verify Your Email</h2>
  </div>
  <div style="padding: 20px; background-color: #111; border-radius: 10px; max-width: 600px; margin: auto;">
    <p>Hi,</p>
    <p>We’re excited to have you on board at My Courses Project!</p>
    <p>Before you can start exploring our courses, please verify your email by clicking the button below:</p>
    <div style="text-align: center; margin: 30px 0;">
      <div class="code">%%VERIFICATION_CODE%%</div>
         style="background-color: #fff;
                color: #000;
                padding: 12px 24px;
                text-decoration: none;
                border-radius: 5px;
                font-weight: bold;">
        VERIFY EMAIL
      </a>
    </div>
    <p>This link will expire in 1 hour.</p>
    <p>If you didn’t request this, just ignore this email.</p>
    <p>—  al7aj test course project</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Reset Your Password</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #000; color: #fff; margin: 0; padding: 0;">
  <div style="padding: 20px; text-align: center;">
    <h1 style="color: #fff;">My Courses Project</h1>
    <h2 style="color: #fff;">Password Reset</h2>
  </div>
  <div style="padding: 20px; background-color: #111; border-radius: 10px; max-width: 600px; margin: auto;">
    <p>Hello,</p>
    <p>Click the button below to reset your password:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="%%RESET_URL%%"
         style="background-color: #000;
                color: #fff;
                padding: 12px 24px;
                text-decoration: none;
                border: 1px solid #fff;
                border-radius: 5px;
                font-weight: bold;">
        RESET PASSWORD
      </a>
    </div>
    <p>This link will expire in 1 hour.</p>
    <p>If this wasn’t you, ignore this email.</p>
    <p>— My Courses Project Team</p>
  </div>
</body>
</html>
`;

