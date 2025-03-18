import asyncHandler from "express-async-handler"
import ApiError from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import ApiResponse from "../utils/ApiResponse.js";
import cityModel from "../models/city.model.js";
import slugify from "slugify";
export const addCity = asyncHandler(async(req, res, next)=>{

    const {cityName} = req.body;

    if (!cityName) {
        throw new ApiError(409, "cityName is required")
    };

    const existedCity = await cityModel.findOne({cityName});
    if(existedCity){
        throw new ApiError(409, "This cityName is already added")
    }

    let image;
    if(req.file){
        const imageLocalPath = req.file.path;
        image = await uploadOnCloudinary(imageLocalPath)
    }

    const newCity = await cityModel.create({
        cityName,
        slug: slugify(cityName,{lower:true}),
        image
    })
    
    res.status(201).json(
        new ApiResponse(200, newCity, "City Added Successfully")
    )
});

export const getAllCity = asyncHandler(async (req, res, next)=>{
    const cities = await cityModel.find({});
    res.status(201).json(
        new ApiResponse(200, cities, "cities fetched Successfully")
    )
});


export const updateCity = asyncHandler(async (req, res, next)=>{

    const {cityName} = req.body;
    const {cid} = req.params;
    if(!cid){
        throw new ApiError(409, "City id is required")
    }

    const existedCity = await cityModel.findById(cid);
    if(!existedCity){
        throw new ApiError(404, "City not found")
    }

    let image;
    if(req.file){
        const imageLocalPath = req.file.path;
        image = await uploadOnCloudinary(imageLocalPath);
    }

    const updatedCity = await cityModel.findByIdAndUpdate(cid,{
        cityName: cityName || existedCity.cityName,
        slug: slugify(cityName,{lower:true}) || existedCity.slug,
        image: image || existedCity.image
    },{new:true})
    res.status(201).json(
        new ApiResponse(200, updatedCity, "City updated Successfully")
    )
});


export const deleteCity = asyncHandler(async (req, res, next)=>{

    const {cid} = req.params;
    if(!cid){
        throw new ApiError(409, "City id is required")
    }

    await cityModel.findByIdAndDelete(cid);

    res.status(201).json(
        new ApiResponse(200, "City deleted Successfully")
    )
})