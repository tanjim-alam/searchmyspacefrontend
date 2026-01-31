import mongoose, { Schema } from "mongoose";

const developerSchema = new Schema({
    developer:{
        type:String,
        required:true,
    },
    slug:{
        type:String,
        required: false
    },
    developerLogo:{
        type:String,
        required:true
    }
});

const developerModel = mongoose.model("Developer",developerSchema);

export default developerModel;