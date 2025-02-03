// all the post related routes
//all the request after /posts
import express from 'express';
import { s3Uploader } from '../../config/multerConfig.js';
import { createPost, deletePost, getAllPost, updatePost } from '../../controllers/postControllers.js';
import { validate } from '../../validators/zodValidator.js';
import { zodPostSchema } from '../../validators/zodPostSchema.js';

const router = express.Router(); // router object

router.post('/', s3Uploader.single("image"),validate(zodPostSchema) ,  createPost);
router.get('/',getAllPost);
router.delete("/:id",deletePost);
router.put("/:id",s3Uploader.single("image"),  updatePost )
export default router;