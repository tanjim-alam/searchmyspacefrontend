import mongoose, { Schema } from "mongoose";

const floorPlanSchema = new Schema({
    floorPlanImage:{
        type:String
    },
    unitType:{
        required:false,
        type:String
    },
    price:{
        required:false,
        type:String
    },
    area:{
        required:false,
        type:String
    }
});

const pricePlanSchema = new Schema({
    unitType:{
        required:false,
        type:String
    },
    price:{
        required:false,
        type:String
    },
    area:{
        required:false,
        type:String
    }
});

const faqSchema = new Schema({
    question:{
        type: String,
    },
    answer: {
        type: String,
    }
})

const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },
    slug:{
        type: String,
        // required: true
    },
    title:{
        type:String
    },
    metaDescription:{
        type:String
    },
    overviewContent:{
        type:String
    },
    amenitiesContent:{
        type:String
    },
    pricePlanContent:{
        type:String
    },
    locationContent:{
        type:String
    },
    mainImage:{
        type:String
    },
    location: {
        type: String,
        required: false
    },
    mapLink: {
        type: String,
        required: false
    },
    city: {
        type: mongoose.Types.ObjectId,
        ref: "City",
        required: true
    },
    price: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false
    },
    about: {
        type: String,
    },
    projectType: {
        type: String,
        required: false
    },
    noOfUnits: {
        type: String,
        // required: true
    },
    noOfFloors: {
        type: String,
        required: false
    },
    projectStatus: {
        type: String,
        // required: true
    },
    developer: {
        type: mongoose.Types.ObjectId,
        ref: "Developer",
        required: true
    },
    totalLandArea: {
        type: String,
        // required: true
    },
    sizeRange: {
        type: String,
        // required: true
    },
    unitVariants: {
        type: String,
        // required: true
    },
    possessionTime: {
        type: String,
        // required: true
    },
    towersAndBlocks: {
        type: String,
        // required: true
    },
    reraNo: {
        type: String,
        // required: true
    },
    floorPlan:[floorPlanSchema],
    pricePlan: [pricePlanSchema],
    gallery: [],
    faqList:[faqSchema]
}, { timestamps: true });


const projectModel = mongoose.model("Project", projectSchema);

export default projectModel;