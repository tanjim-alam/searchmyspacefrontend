import mongoose, { Schema } from "mongoose";

const citySchema = new Schema({
    cityName:{
        type:String,
        required:true,
    },
    slug:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    }
});

const cityModel = mongoose.model("City",citySchema);

export default cityModel;