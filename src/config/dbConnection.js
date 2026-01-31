import mongoose from "mongoose"

const dbConnection = async () => {
    try {
        const instance = await mongoose.connect(process.env.MONGO_URI);
        // console.log("DB Connected Successfuly");
    } catch (error) {
        // console.log("failed to connect db");
    }
};

export default dbConnection;