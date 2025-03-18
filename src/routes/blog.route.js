import { Router } from "express";
import { addBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from "../controllers/blog.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const routes = Router();

routes.post("/add", upload.single("featureImage"), addBlog);
routes.get("/:slug", getBlog);
routes.get("/all", getAllBlogs);
routes.put("/update/:bid", upload.single("featureImage"), updateBlog);
routes.put("/delete/:bid", deleteBlog);

export default routes;