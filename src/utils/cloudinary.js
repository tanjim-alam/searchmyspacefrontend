import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "dmz316wxm",
  api_key: process.env.CLOUDINARY_API_KEY || "247179179471582",
  api_secret: process.env.CLOUDINARY_API_SECRET || "VSv5o_M_axaKxwz-ktxT-inuoJo",
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) throw new Error("File path is missing!");

    // Upload file to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });


    // Remove file from local storage AFTER successful upload
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    } else {
      console.warn("File not found for deletion:", localFilePath);
    }

    return response.secure_url;
  } catch (error) {
    console.error("Cloudinary upload failed:", error.message);

    // Ensure we only attempt to delete if file exists
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    return null;
  }
};

export { uploadOnCloudinary };
