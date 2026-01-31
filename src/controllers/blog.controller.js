import asyncHandler from "express-async-handler";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import blogModel from "../models/blog.model.js";
import slugify from "slugify";

export const addBlog = asyncHandler(async (req, res, next)=>{

    const {title, content, metaDescription} = req.body;

    if (!title || !content) {
        return res.status(405).json({ success: false, message: "Both fields are required" })
    };

    let uploadedImage;
    if(req.file){
        const featureImage = req.file.path;
        uploadedImage = await uploadOnCloudinary(featureImage);
    };
    try {

        const blog = await blogModel.create({
            title,
            slug:slugify(title,{lower:true}),
            content,
            metaDescription,
            featureImage: uploadedImage
        });

        if (!blog) {
            return res.status(401).json({ success: false, message: "Something went wrong" })
        }
        res.status(200).json({
            success: true,
            message: "Blog added successfully",
            blog
        });
    } catch (error) {
        res.status(501).json({
            success: false,
            message: "Blog failed to add",
        });
    }
});

export const getBlog = asyncHandler(async (req, res, next)=>{
    const {slug} = req.params;
    if (!slug) {
        return res.status(405).json({ success: false, message: "slug is required" })
    };

    try {
        const blog = await blogModel.findOne({slug});
        if (!blog) {
            return res.status(401).json({ success: false, message: "Something went wrong1" })
        }
        res.status(200).json({
            success: true,
            message: "Blog fetched successfully",
            blog
        });
    } catch (error) {
        res.status(501).json({
            success: false,
            message: error.message,
        });
    }
});


export const getBlogById = asyncHandler(async (req, res, next)=>{
    const {bid} = req.params;
    if (!bid) {
        return res.status(405).json({ success: false, message: "bid is required" })
    };

    try {
        const blog = await blogModel.findById(bid);
        if (!blog) {
            return res.status(401).json({ success: false, message: "Something went wrong1" })
        }
        res.status(200).json({
            success: true,
            message: "Blog fetched successfully",
            blog
        });
    } catch (error) {
        res.status(501).json({
            success: false,
            message: error.message,
        });
    }
});


export const getAllBlogs = asyncHandler(async (req, res, next)=>{
    try {
        const blogs = await blogModel.find({}).sort({createdAt: -1});
        res.status(200).json({
            success: true,
            message: "Blogs fetched successfully",
            blogs
        });
    } catch (error) {
        // console.log("err",error)
        res.status(501).json({
            success: false,
            message: error.message,
        });
    }
});

export const updateBlog = asyncHandler(async (req, res, next)=>{
    const {bid} = req.params;
    if (!bid) {
        return res.status(405).json({ success: false, message: "blog id is required" })
    };
    const {title, content, metaDescription} = req.body;

    try {
        const blog = await blogModel.findById(bid);
        if (!blog) {
            return res.status(404).json({ success: false, message: "blog not found" })
        };
        let uploadedImage;
        if(req.file){
            const featureImage = req.file.path;
            uploadedImage = await uploadOnCloudinary(featureImage);
        };

        const updatedBlog = await blogModel.findByIdAndUpdate(bid,{
            title: title || blog.title,
            slug: title ? slugify(title, {lower:true}) : blog.slug,
            content: content || blog.content,
            metaDescription: metaDescription || blog.metaDescription,
            featureImage: uploadedImage || blog.featureImage
        }, {new:true});
        res.status(200).json({
            success: true,
            message: "Blog updated successfully",
            updatedBlog
        });
    } catch (error) {
        res.status(501).json({
            success: false,
            message: error.message,
        });
    }
});

export const deleteBlog = asyncHandler(async (req, res, next)=>{
    const {bid} = req.params;
    if (!bid) {
        return res.status(405).json({ success: false, message: "blog id is required" })
    };
    try {
        await blogModel.findByIdAndDelete(bid);
        res.status(200).json({
            success: true,
            message: "Blog delete successfully",
        });
    } catch (error) {
        res.status(501).json({
            success: false,
            message: error.message,
        });
    }
})