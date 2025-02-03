import multer from "multer";
import multerS3 from "multer-s3";
import { s3 } from "./awsConfig.js";
import { AWS_BUCKET_NAME } from "./serverConfig.js";

//multer has a capability to take file and also store that on a server.

export const s3Uploader = multer({
  storage: multerS3({
    s3:s3,
    bucket:AWS_BUCKET_NAME,
    key: function (req, file, cb){
      if(!file ){
        console.log("in multer config",file);
        return cb(new Error("File not found"))
      }
      // check memetype for file types
      if(file.mimetype !== "image/jpeg" && file.mimetype !== "image/png" ){
        return cb(new Error("File type not supported "))
      }
      console.log("in multer config 2",file);
      const uniqueSuffix = Date.now()+ "-"+Math.round(Math.random()*1e9); // to make sure the key is unique.
      cb(null, file.fieldname+"-"+ uniqueSuffix+"."+ file.mimetype.split("/")[1]);
    }
  })
}); //uploader is a middleware.