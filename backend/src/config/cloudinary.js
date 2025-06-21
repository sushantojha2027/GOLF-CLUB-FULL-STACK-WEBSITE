import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import fs from "fs"
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
console.log(process.env.CLOUDINARY_API_KEY)
const uploadOnCloudinary =(localfilePath) =>{
  try{
    if(!localfilePath){
      return null;
    }
    const response = cloudinary.uploader.upload(localfilePath,{
      resourse_type: "image"

  });
  console.log("File Uploaded successfully", response.url);
  console.log(response.url)
  return response;
}
catch(error){
  fs.unlinkSync(localfilePath)
  console.log("Error while uploading to cloudinary",error)
  return null;
}
}
export default uploadOnCloudinary;