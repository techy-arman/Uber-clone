const express = require("express")
const router = express.Router()
const {body} = require("express-validator")
const userController = require("../controllers/user.controller")

try{
    router.post('/register',[
        body("email").isEmail().withMessage("Please enter a valid email."),
        body("fullname.firstname").isLength({min:3}).withMessage("Firsname must contain atleast 3 characters."),
        body("password").isLength({min:5}).withMessage("Password must contain atleast 5 characters.")
    
    ],
    
    userController.registerUser
    
    )
}
catch(err){
    console.log("Post error",err)
}

module.exports=router;