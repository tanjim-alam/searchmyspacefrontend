import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const authSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["admin","user"],
        default:"user"
    }
},{timestamps:true});


authSchema.pre("save", async function(next){
    if(!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password,10);
    next();
});

authSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password,this.password)
}

const authModel = mongoose.model("Auth", authSchema);

export default authModel;