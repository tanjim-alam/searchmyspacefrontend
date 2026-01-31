import { Router } from "express";
import { addBlog, deleteBlog, getAllBlogs, getBlog, getBlogById, updateBlog } from "../controllers/blog.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const routes = Router();

routes.post("/add", upload.single("featureImage"), addBlog);
routes.get("/byslug/:slug", getBlog);
routes.get("/byid/:bid",getBlogById);
routes.get("/all", getAllBlogs);
routes.put("/update/:bid", upload.single("featureImage"), updateBlog);
routes.delete("/delete/:bid", deleteBlog);

export default routes;