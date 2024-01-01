import User from "../models/userModel.js";
import { errorHandler } from "../utlis/error.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//register user
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

//login user
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

//logout user
export const logoutUser = async (req, res, next) => {
  res.clearCookie("token");
  res.status(200).json({ message: "user has been logged out" });
};

//get user
export const getUser = async (req, res, next) => {
  try {
    const user = await User.find({}, { password: 0 });
    if (!user) {
      res.status(404).json({ message: "User Not Found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    next(errorHandler(500, "Internal server error"));
  }
};

//getuserByid
export const getUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id, { password: 0 });
    if (!user) {
      res.status(404).json({ message: "User Not Found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    next(errorHandler(500, "Internal server error"));
  }
};
export const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { username, email, password } = req.body;
  try {
    if (password) {
      password = bcrypt.hashSync(password, 10);
    }
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: {
          username,
          email,
          password,
        },
      },
      { new: true }
    );
    if (!updatedUser) {
      res.json(404).json({ message: "User Not found" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    next(errorHandler(500, "Internal server Error"));
  }
};
export const deleteUser = async () => {};
