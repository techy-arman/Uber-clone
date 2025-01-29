const express = require("express")
const router = express.Router()
const { body } = require("express-validator")
const userController = require("../controllers/user.controller")
const authMiddleware = require("../middleware/auth.middleware")

try {
    router.post('/register', [
        body("email").isEmail().withMessage("Please enter a valid email."),
        body("fullname.firstname").isLength({ min: 3 }).withMessage("Firsname must contain atleast 3 characters."),
        body("password").isLength({ min: 5 }).withMessage("Password must contain atleast 5 characters.")

    ],

        userController.registerUser

    )
}
catch (err) {
    console.log("Post error", err)
}
try {
    router.post('/login', [
        body("email").isEmail().withMessage("Please enter a valid email."),
        body("password").isLength({ min: 5 }).withMessage("Password must contain atleast 5 characters.")

    ],

        userController.loginUser

    )
}
catch (err) {
    console.log("Post error", err)
}

router.get("/profile",authMiddleware.authUser,userController.getUserProfile)

router.get("/logout",authMiddleware.authUser,userController.logoutUser)

module.exports = router;

