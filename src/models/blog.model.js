import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    metaDescription:{
        type:String,
        required:false
    },
    featureImage:{
        type:String,
    }
},{timestamps:true});

const blogModel = mongoose.model("Blog", blogSchema);

export default blogModel;