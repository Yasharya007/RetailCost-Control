import {v2 as cloudinary} from 'cloudinary';
import dotenv from "dotenv"
dotenv.config({
  path:'./.env'
})
import fs from "fs"        
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary=async (localFilePath)=>{
  try{
    if(!localFilePath)return null
    //upload the file on cloudinary
   const response=await cloudinary.uploader.upload(localFilePath,{
      resource_type:"auto"
    })
    console.log("File uploaded",response.url);
    fs.unlinkSync(localFilePath);
    return response;
  }catch(error){
    fs.unlinkSync(localFilePath);
    console.log(error.message)
    return null;
  }
}

export {uploadOnCloudinary};

// const uploadOnCloudinary = async (localFilePath) => {
//   // const options = { folder };
//   // console.log(mediaType);
//   return await cloudinary.uploader.upload(localFilePath);
// };
// export {uploadOnCloudinary};