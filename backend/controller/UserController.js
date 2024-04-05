import { comparePassword, hashPassword } from "../helper/authHelper.js";
import UserModel from "../models/UserModel.js";
import jwt from "jsonwebtoken"
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


export const loginController = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await UserModel.findOne({ email });
  
      if(!email || !password){
          return res.status(404).send({
              success: false, 
              message: "Invalid email or password"
          });
      }
  
      if(!user){
          return res.status(404).send({
              success: false, 
              error: "Email is not registered"
          })
      }
  
      const match = await comparePassword(password, user.password);
      if(!match){
          return res.status(200).send({
              success: false,
              message: "Invalid Password"
          })
      }
      // Token
      const token = await jwt.sign({_id: user._id}, process.env.JWT_SECRET, {
          expiresIn: "80d"
      });
  
      return res.status(200).send({
          success: true, 
          message: "Logged in successfull",
          user: {
              name: user.name, 
              email: user.email,
              role: user.role
          },
          token: token
  
      })
    } catch (error) {
          res.json({
              error: "Error" + error
          })
    }
  };