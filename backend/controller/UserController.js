import { hashPassword } from "../helper/authHelper.js";
import UserModel from "../models/UserModel.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name) {
      res.json({ message: "Name is required field" });
    }
    if (!email) {
      res.json({ message: "Email is required field" });
    }
    if (!password) {
      res.json({ message: "Password is required field" });
    }
    const isUser = await UserModel.findOne({ email });

    //Existing User?
    if (isUser) {
      return res.status(200).send({
        error: "User already exits with this username or email id",
        success: false,
      });
    }
    const hashedPassword = await hashPassword(password);

    // Save
    const user = await new UserModel({
      name,
      email,
      password: hashedPassword,
    }).save();
    res.status(201).json({
      success: true,
      message: "Account Created Sucecssfully",
      userData: user,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error,
      message: "Error in registration" + error,
    });
  }
};

