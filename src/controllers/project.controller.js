import asyncHandler from "express-async-handler";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import projectModel from "../models/project.model.js";
import mongoose from "mongoose";
import ApiError from "../utils/ApiError.js";
import slugify from "slugify";
import developerModel from "../models/developer.model.js";
import cityModel from "../models/city.model.js";

export const addProject = asyncHandler(async (req, res, next) => {
    const {
        projectName,
        location,
        mapLink,
        city,
        price,
        status,
        about,
        projectType,
        noOfUnits,
        noOfFloors,
        projectStatus,
        developer,
        totalLandArea,
        sizeRange,
        unitVariants,
        possessionTime,
        towersAndBlocks,
        reraNo,
    } = req.body;

    // Parse floorPlan and pricePlan data
    let floorPlan = [];
    if (req.body.floorPlan) {
        try {
            floorPlan = JSON.parse(req.body.floorPlan);
        } catch (error) {
            return res.status(400).json({ success: false, message: "Invalid floorPlan format" });
        }
    }

    let pricePlan = [];
    if (req.body.pricePlan) {
        try {
            pricePlan = JSON.parse(req.body.pricePlan);
        } catch (error) {
            return res.status(400).json({ success: false, message: "Invalid pricePlan format" });
        }
    }

    // Upload floorPlan images to Cloudinary and attach to floorPlan array
    if (req.files?.floorPlanImages) {
        for (let i = 0; i < req.files.floorPlanImages.length; i++) {
            const uploadedImage = await uploadOnCloudinary(req.files.floorPlanImages[i].path);
            if (floorPlan[i]) {
                floorPlan[i].floorPlanImage = uploadedImage; // Attach image URL
            }
        }
    }

    // Upload main image to Cloudinary
    let uploadedImage = "";
    if (req.files?.mainImage) {
        uploadedImage = await uploadOnCloudinary(req.files.mainImage[0].path);
    }

    // Upload gallery images to Cloudinary
    const uploadedGalleryImages = [];
    if (req.files?.gallery) {
        for (const image of req.files.gallery) {
            const uploadedImg = await uploadOnCloudinary(image.path);
            uploadedGalleryImages.push(uploadedImg);
        }
    }

    // Create project in MongoDB
    const project = await projectModel.create({
        projectName,
        slug: slugify(projectName, {lower:true}),
        location,
        mapLink,
        city,
        price,
        status,
        about,
        projectType,
        noOfUnits,
        noOfFloors,
        projectStatus,
        developer,
        totalLandArea,
        sizeRange,
        unitVariants,
        possessionTime,
        towersAndBlocks,
        reraNo,
        floorPlan,  
        pricePlan,  
        gallery: uploadedGalleryImages,
        mainImage: uploadedImage,
    });

    res.status(200).json({
        success: true,
        message: "Project added successfully",
        project,
    });
});


export const getProject = asyncHandler(async (req, res, next) => {
    const { pid } = req.params;

    if (!pid || !mongoose.Types.ObjectId.isValid(pid)) {
        return next(new ApiError(400, "Invalid or missing project ID2"));
    }

    const project = await projectModel.findById(pid).populate("developer").populate("city");

    if (!project) {
        return next(new ApiError(404, "Project not found"));
    }

    res.status(200).json({
        success: true,
        message: "Project fetched successfully",
        project,
    });
});

export const getProjectBySlug = asyncHandler(async (req, res, next) => {
    const { slug } = req.params;
    if (!slug) {
        return next(new ApiError(400, "Invalid or missing project ID1"));
    }

    const project = await projectModel.findOne({slug}).populate("developer").populate("city");

    if (!project) {
        return next(new ApiError(404, "Project not found"));
    }

    res.status(200).json({
        success: true,
        message: "Project fetched successfully",
        project,
    });
});



export const getAllProjects = asyncHandler(async (req, res, next)=>{

    const projects = await projectModel.find({}).populate("developer").populate("city").sort({createdAt: -1})

    if(!projects){
        res.status(404).json({
            success: false,
            message: "Projects not found",
        });
        return;
    }

    res.status(200).json({
        success: true,
        message: "Projects fetched successfully",
        projects,
    });

});


export const updateProject = asyncHandler(async (req, res, next) => {
    const { pid } = req.params;

    if (!pid || !mongoose.Types.ObjectId.isValid(pid)) {
        return next(new ApiError(400, "Invalid or missing project ID3"));
    }

    const {
        projectName,
        location,
        mapLink,
        city,
        price,
        status,
        about,
        projectType,
        noOfUnits,
        noOfFloors,
        projectStatus,
        developer,
        totalLandArea,
        sizeRange,
        unitVariants,
        possessionTime,
        towersAndBlocks,
        reraNo,
    } = req.body;



    // Parse JSON fields safely
    let floorPlan = [];
    let pricePlan = [];

    const newGalleryImage = req.files?.gallery;
    let existingGallery = req.body.existingGallery;
    if (!Array.isArray(existingGallery)) {
        existingGallery = existingGallery ? [existingGallery] : [];
      }
    
    try {
        // if (req.body.floorPlan) floorPlan = JSON.parse(req.body.floorPlan);
        if (req.body.pricePlan) pricePlan = JSON.parse(req.body.pricePlan);
    } catch (error) {
        return res.status(400).json({ success: false, message: "Invalid JSON format in request body" });
    }

    const project = await projectModel.findById(pid);
    if (!project) return next(new ApiError(404, "Project not found"));

    // Upload floorPlan images to Cloudinary
    if (req.files?.floorPlanImages && floorPlan.length > 0) {
        for (let i = 0; i < req.files.floorPlanImages.length; i++) {
            try {
                const uploadedImage = await uploadOnCloudinary(req.files.floorPlanImages[i].path);
                if (floorPlan[i]) floorPlan[i].floorPlanImage = uploadedImage;
            } catch (error) {
                console.error("Error uploading floorPlan image:", error);
            }
        }
    }

    // Upload main image to Cloudinary
    let uploadedMainImage = project.mainImage;
    if (req.files?.mainImage) {
        try {
            uploadedMainImage = await uploadOnCloudinary(req.files.mainImage[0].path);
        } catch (error) {
            console.error("Error uploading main image:", error);
        }
    }



    // Upload gallery images to Cloudinary
    let uploadedGalleryImages = [];

    if (existingGallery) {
        existingGallery.forEach((image) => {
            uploadedGalleryImages.push(image);
        })
    }

    if (newGalleryImage) {
        // try {
        //     uploadedGalleryImages = await Promise.all(
        //         req.files.gallery.map(async (image) => {
        //             return await uploadOnCloudinary(image.path);
        //         })
        //     );
        // } catch (error) {
        //     console.error("Error uploading gallery images:", error);
        // }

        for(const image of newGalleryImage){
            const uploadedImage = await uploadOnCloudinary(image.path);
            uploadedGalleryImages.push(uploadedImage)
        }
    }

    // Update project details
    const updatedProject = await projectModel.findByIdAndUpdate(
        pid,
        {
            projectName: projectName || project.projectName,
            slug: slugify(projectName, {lower:true}) || project.slug,
            location: location || project.location,
            mapLink: mapLink || project.mapLink,
            city: city || project.city,
            price: price || project.price,
            status: status || project.status,
            about: about || project.about,
            projectType: projectType || project.projectType,
            noOfUnits: noOfUnits || project.noOfUnits,
            noOfFloors: noOfFloors || project.noOfFloors,
            projectStatus: projectStatus || project.projectStatus,
            developer: developer || project.developer,
            totalLandArea: totalLandArea || project.totalLandArea,
            sizeRange: sizeRange || project.sizeRange,
            unitVariants: unitVariants || project.unitVariants,
            possessionTime: possessionTime || project.possessionTime,
            towersAndBlocks: towersAndBlocks || project.towersAndBlocks,
            reraNo: reraNo || project.reraNo,
            floorPlan,  
            pricePlan: pricePlan || project.pricePlan,  
            gallery: uploadedGalleryImages,
            mainImage: uploadedMainImage,
        },
        { new: true }
    );

    res.status(200).json({
        success: true,
        message: "Project updated successfully",
        updatedProject,
    });
});


export const getProjectsByCity = asyncHandler(async (req, res, next)=>{
    const { slug } = req.params;

    if (!slug) {
        return next(new ApiError(400, "Invalid or missing City Name"));
    }

    const city = await cityModel.findOne({slug});
    if (!city) {
        return next(new ApiError(404, "City Not found"));
    }
    const projects = await projectModel.find({city: city._id}).populate("city").populate("developer").sort({createdAt: -1});
    res.status(200).json({
        success: true,
        message: "Project fetched successfully",
        projects,
    });
});


export const getProjectsByDeveloper = asyncHandler(async (req, res, next)=>{
    const { slug } = req.params;
    if (!slug) {
        return next(new ApiError(400, "Invalid or missing Developer Name"));
    }

    const developer = await developerModel.findOne({slug});
    if (!developer) {
        return next(new ApiError(404, "Developer Not found"));
    }
    const projects = await projectModel.find({developer: developer._id}).populate("city").populate("developer").sort({createdAt: -1});
    res.status(200).json({
        success: true,
        message: "Project fetched successfully",
        projects,
    });
});


export const searchProject = asyncHandler(async (req, res, next) => {
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ success: false, message: "Query is required" });
    }

    // Search for Project
    const project = await projectModel.findOne({ projectName: new RegExp(query, "i") });
    if (project) {
        return res.status(200).json({
            success: true,
            message: "Project found",
            project,
        });
    }

    // Search for Developer
    const developer = await developerModel.findOne({ developer: new RegExp(query, "i") });
    if (developer) {
        const projects = await projectModel.find({ developer: developer._id }).populate("developer").populate("city");
        return res.status(200).json({
            success: true,
            message: "Projects by developer found",
            projects,
        });
    }

    // Search for City
    const city = await cityModel.findOne({ cityName: new RegExp(query, "i") });
    if (city) {
        const projects = await projectModel.find({ city: city._id });
        return res.status(200).json({
            success: true,
            message: "Projects in city found",
            projects,
        });
    }

    // No Results Found
    return res.status(404).json({ success: false, message: "No results found" });
});

export const getSuggestions = asyncHandler(async (req, res) => {
    const { query } = req.query;
    if (!query) return res.status(400).json({ message: "Query is required" });

    try {
        // Find matching projects, developers, and cities (case-insensitive)
        const projects = await projectModel.find({ projectName: new RegExp(query, "i") }).limit(5);
        const developers = await developerModel.find({ developer: new RegExp(query, "i") }).limit(5);
        const cities = await cityModel.find({ cityName: new RegExp(query, "i") }).limit(5);

        // Combine suggestions
        const suggestions = [
            ...projects.map(p => ({ _id: p._id, name: p.projectName, type: "Project" })),
            ...developers.map(d => ({ _id: d._id, name: d.developer, type: "Developer" })),
            ...cities.map(c => ({ _id: c._id, name: c.cityName, type: "City" })),
        ];

        res.status(200).json({ success: true, suggestions });
    } catch (error) {
        console.error("Error fetching suggestions:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

