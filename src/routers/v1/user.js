// after /users the remaining part of the url is handled here 
import express from "express"
import { getProfile } from "../../controllers/userControlers.js";

const router = express.Router();

router.get("/profile",getProfile);


export default router;