import User from "../models/userModel.js";
import { errorHandler } from "../utlis/error.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      res.status(404).json({ message: "User Not Found" });
    }
    const isPasswordValid = bcrypt.compareSync(password, validUser.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("token", token, { httpOnly: true, SameSite: "None" })
      .status(200)
      .json(rest);
  } catch (error) {
    console.error("Error:", error);
    next(errorHandler(500, "Internal Server Error"));
  }
};
export const getUser = async () => {};
export const getUserById = async () => {};
export const updateUser = async () => {};
export const deleteUser = async () => {};
