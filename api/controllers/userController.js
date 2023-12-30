import User from "../models/userModel.js";
import { errorHandler } from "../utlis/error.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json({ message: "Email is already in use" });
    }
    await User.create({ username, email, password: hashedPassword });
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error:", error);
    next(errorHandler(500, "Internal Server Error"));
  }
};
export const loginUser = async () => {};
export const getUser = async () => {};
export const getUserById = async () => {};
export const updateUser = async () => {};
export const deleteUser = async () => {};
