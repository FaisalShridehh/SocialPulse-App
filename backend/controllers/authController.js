import User from "../models/User.js";
import bcrypt from "bcrypt";

/**
 * Post
// Register user
 * ||
 * \/
 */
export const registerUser = async (req, res) => {
  try {
    const isUserExist = await User.findOne({ email: req.body.email });

    if (isUserExist)
      return res
        .status(400)
        .json({ message: "User already exists go to login", isUserExist });

    const saltRounds = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const newUser = await user.save();

    if (!newUser)
      return res.status(409).json({
        message: "Conflicts",
      });

    return res.status(201).json({
      message: "Successfully created a new user",
      newUser,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error happens while login the user", error });
  }
};

/**
 * Post
// Login user
 * ||
 * \/
 */
export const LoginUser = async (req, res) => {
  try {
    const isUserExist = await User.findOne({
      email: req.body.email,
    });

    if (!isUserExist)
      return res.status(404).json({
        message: "User not found",
      });

    const validPassword = await bcrypt.compare(
      req.body.password,
      isUserExist.password
    );

    if (!validPassword)
      return res.status(401).json({
        message: "UnAuthorized",
      });

    return res.status(200).json({
      message: "User Login successfully",
      isUserExist,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error happens while login the user",
      error,
    });
  }
};
