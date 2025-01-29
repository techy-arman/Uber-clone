const userModel = require("../models/user.model")
const captainModel = require("../models/captain.model")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const blacklistTokenModel = require("../models/blacklistToken.model")

module.exports.authUser =async (req,res,next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1]
    if(!token){
        return res.status(401).json({message:"Unauthorized user"})
    }
    const isBlacklistedToken = await blacklistTokenModel.findOne({token})
    if(isBlacklistedToken){
        return res.status(401).json({message:"UnAuthorized user"})
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const user = await userModel.findById(decoded._id)
        req.user = user;
        next();
    }
    catch(err){
        return res.status(401).json({message:"Unauthorized token"})
    }
}

module.exports.authCaptain = async (req,res,next) =>{
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if(!token){
        return res.status(401).json({message:"Unauthorized user"})
    }
    const isBlacklistedToken = await blacklistTokenModel.findOne({token})
    if(isBlacklistedToken){
        return res.status(401).json({message:"UnAuthorized user"})
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);
        req.captain = captain;
        return next();
    }
    catch(err){
        res.status(401).json({message:"Unauthorized token"})
    }
}
