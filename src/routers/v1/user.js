// after /users the remaining part of the url is handled here 
import express from "express"
import { getProfile, signin, signupUser } from "../../controllers/userControllers.js";
import { validate } from "../../validators/zodValidator.js";
import { zodSignupSchema } from "../../validators/zodSignupSchema.js";
import { zodSigninSchema } from "../../validators/zodSigninSchema.js";

const router = express.Router();

router.get("/profile",getProfile);
router.post("/signup",validate(zodSignupSchema),signupUser);
router.post("/signin",validate(zodSigninSchema) ,signin);

export default router;