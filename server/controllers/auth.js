import User from "../models/user.js";
import jwt from "jsonwebtoken";
// Register a user
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).send("Please fill all the  required Credentials");

    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).send("User already exists with this email");

    const user = await User.create(req.body);
    res.status(201).json({
      ok: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// login user

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).send("User not found with this email");

    const comparePassword = await user.matchPassword(password);
    if (!comparePassword) return res.status(400).send("Wrong Password Entered");
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).json({
      token,
      _id: user._id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    });
  } catch (error) {
    console.log(error);
  }
};
