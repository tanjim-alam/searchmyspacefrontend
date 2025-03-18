import asyncHandler from "express-async-handler"
import authModel from "../models/auth.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken"

export const register = asyncHandler(async(req, res, next)=>{

    const {name,email,password} = req.body;

    const existedUser = await authModel.findOne({email});

    if(existedUser){
        throw new ApiError(409, "User already existed")
    }

    const user = await authModel.create({
        name,
        email,
        password
    });

    if(!user){
        throw new ApiError(500, "Something went wrong while registering")
    }

    return res.status(200).json({ success: true, message: "User register successfully", user })
});


export const login = asyncHandler(async (req, res, next)=>{
    const {email, password} = req.body;
    if (!(email || password)) {
        throw new ApiError(409, "email and password are required")
    };

    const user = await authModel.findOne({email});
    if(!user){
        throw new ApiError(409, "User not found")
    }
    const isValidPassword = await user.comparePassword(password);
    if (!isValidPassword) {
        throw new ApiError(409, "Invalid password")
    }

    const token = jwt.sign({id:user._id, role: user.role}, process.env.JWT_SECRET, {expiresIn: "1d"});
    if(!token){
        throw new Error("Something went wrong");
    }
    const data = {
        user,
        token
    }
    return res.status(200).json({ success: true, message: "User register successfully", data })
});


export const getProfile = asyncHandler(async (req, res) => {
    const token = req.headers["authorization"];
    if (!token) {
        return res.status(403).json({ success: false, message: "Access denied, token missing" })
    };

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await authModel.findById(decoded.id);

    if (!user) {
        return res.status(404).json({ success: false, message: "User Not found" })
    }
    // Respond with the user data
    return res.status(200).json({ success: true, message: "User fetched successfully", user })
})