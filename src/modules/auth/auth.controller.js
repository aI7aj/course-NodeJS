import * as authService from "./auth.service.js";


export const register = async (req, res) => {
  const result = await authService.register(req.body);
  return res.status(201).json({
    message: "user registered successfully",
    user: result,
  })
};


export const login = async (req, res) => {
  try {
    const result = await authService.login(req.body);
    res.status(200).json({
      message: "logged in successfully",
      token: result.token,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const confirmEmail = async (req, res) => {
  const { email, code } = req.body;
  await authService.confirmEmail({ email, code }) ;
  res.status(200).json({ message: "email confirmed successfully" });
};
