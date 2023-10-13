const cloudinary =require("clouadiray").v2;


cloudinary.config({
    cloud_name:process.env.cloud_name,
    api_key:process.env.cloud_key,
    api_secret:process.env.cloud_key_secret,
})

export default cloudinary;