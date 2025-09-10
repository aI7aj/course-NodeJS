import * as authService from "./auth.service.js";

// export const register = async (req, res) => {
//   try {
//         console.log("Register endpoint hit:", req.body);

//     const result = await authService.register(req.body);
//     res.status(201).json({
//       message: "User registered successfully",
//       user: result,
//     });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
export const register = (req, res) => {
  console.log("Register hit:", req.body);
  res.json({ message: "Register endpoint works", body: req.body });
};


export const login = async (req, res) => {
  try {
    const result = await authService.login(req.body);
    res.status(200).json({
      message: "User logged in successfully",
      token: result.token,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const confirmEmail = async (req, res) => {
  const email = req.body;
  await authService.confirmEmail(email);
  res.status(200).json({ message: "Email confirmed successfully" });
};
