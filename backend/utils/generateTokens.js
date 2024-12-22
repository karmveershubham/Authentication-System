import jwt from "jsonwebtoken"
import userRefreshTokenModel from "../models/UserRefreshToken.js";
const generateTokens =async (user)=>{
    try{
        const payload={ _id:user._id, roles:user.roles};

        //Expiration time 100 sec
        const accessTokenExp=Math.floor(Date.now()/1000)+100;
        
        const  accessToken =jwt.sign(
            {...payload, exp:accessTokenExp},
            process.env.JWT_ACCESS_TOKEN_SECRET_KEY,
        );

        // Expiration time 5 days
        const refreshTokenExp = Math.floor(Date.now()/1000)+60*60*24*5;

        const  refreshToken = jwt.sign(
            {...payload, exp:refreshTokenExp},
            process.env.JWT_REFRESH_TOKEN_SECRET_KEY,
        );

        const UserRefreshToken=await userRefreshTokenModel.findOneAndDelete({userId: user._id});

        //  // if want to blacklist rather than remove then use below code
        // if (userRefreshToken) {
        //   userRefreshToken.blacklisted = true;
        //   await userRefreshToken.save();
        // }

        //save new refresh Token
        await new userRefreshTokenModel({userId:user._id, token:refreshToken}).save();

        return Promise.resolve({accessToken, refreshToken, accessTokenExp, refreshTokenExp})

    }catch(error){
        return Promise.reject(error);
    }
}

export default generateTokens;