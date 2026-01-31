import asyncHandler from "express-async-handler"
import ApiError from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import ApiResponse from "../utils/ApiResponse.js";
import developerModel from "../models/developer.model.js";
import slugify from "slugify";

export const addDeveloper = asyncHandler(async(req, res, next)=>{

    const {developer} = req.body;
    if (!developer) {
        throw new ApiError(409, "developer is required")
    };

    const existedDeveloper = await developerModel.findOne({developer});
    if(existedDeveloper){
        throw new ApiError(409, "This developer is already added")
    }

    let developerLogo;
    if(req.file){
        const imageLocalPath = req.file.path;
        developerLogo = await uploadOnCloudinary(imageLocalPath)
    }

    const newDeveloper = await developerModel.create({
        developer,
        slug: slugify(developer, {lower:true}),
        developerLogo
    })
    
    res.status(201).json(
        new ApiResponse(200, newDeveloper, "developer Added Successfully")
    )
});

export const getAllDevelopers = asyncHandler(async (req, res, next) => {
    try {
        const developers = await developerModel.find({});
        res.status(200).json(
            new ApiResponse(200, developers, "Developers fetched successfully")
        );
    } catch (error) {
        next(new ApiError(500, "Failed to fetch developers"));
    }
});



export const updateDeveloper = asyncHandler(async (req, res, next)=>{

    const {developer} = req.body;
    const {did} = req.params;
    if(!did){
        throw new ApiError(409, "developer id is required")
    }

    const existedDeveloper = await developerModel.findById(did);
    if(!existedDeveloper){
        throw new ApiError(404, "developer not found")
    }

    let developerLogo;
    if(req.file){
        const imageLocalPath = req.file.path;
        developerLogo = await uploadOnCloudinary(imageLocalPath);
    }

    const updatedDeveloper = await developerModel.findByIdAndUpdate(did,{
        developer: developer || existedDeveloper.developer,
        slug: slugify(developer, {lower:true}),
        developerLogo: developerLogo || existedDeveloper.developerLogo
    },{new:true})
    res.status(201).json(
        new ApiResponse(200, updatedDeveloper, "developer updated Successfully")
    )
});


export const deleteDeveloper = asyncHandler(async (req, res, next)=>{

    const {did} = req.params;
    if(!did){
        throw new ApiError(409, "developer id is required")
    }

    await developerModel.findByIdAndDelete(did);

    res.status(201).json(
        new ApiResponse(200, "developer deleted Successfully")
    )
})