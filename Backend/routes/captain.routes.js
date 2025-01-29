const express = require("express")

const router = express.Router();
const captainController = require("../controllers/captain.controller")
const authMiddleware = require("../middleware/auth.middleware")
const { body } = require("express-validator")


router.post("/register", [
    body("email").isEmail().withMessage("Please enter a valid email."),
    body("fullname.firstname").isLength({ min: 3 }).withMessage("Firstname must contain at least 3 characters."),
    body("fullname.lastname").isLength({ min: 3 }).withMessage("Lastname must contain at least 3 characters."),
    body("password").isLength({ min: 6 }).withMessage("Password must contain at least 6 characters."),
    body("vehicle.color").isLength({ min: 2 }).withMessage("Vehicle color must contain at least 2 characters."),
    body("vehicle.plate").isLength({ min: 2 }).withMessage("Vehicle plate must contain at least 2 characters."),
    body("vehicle.capacity").isInt({ min: 1 }).withMessage("Capacity must be at least 1."),
    body("vehicle.vehicleType").isIn(["motorcycle", "car", "auto"]).withMessage("Invalid vehicle type.")
],
    captainController.registerCaptain
)

router.post("/login", [
    body("email").isEmail().withMessage("Please enter a valid email."),
    body("password").isLength({ min: 6 }).withMessage("Password must contain at least 6 characters.")
],
    captainController.loginCaptain
)

router.get("/profile",authMiddleware.authCaptain,captainController.getCaptainProfile)

router.get("/logout",authMiddleware.authCaptain,captainController.logoutCaptain)

module.exports = router;