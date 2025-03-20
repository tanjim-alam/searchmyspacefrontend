import { Router } from "express";
import { addProject, deleteProject, getAllProjects, getProject, getProjectBySlug, getProjectsByCity, getProjectsByDeveloper, getSuggestions, searchProject, updateProject } from "../controllers/project.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const routes = Router();

routes.post("/add", upload.fields([{name: "mainImage", maxCount:1}, {name: "gallery", maxCount: 10},{ name: "floorPlanImage", maxCount: 2 }]), addProject);
routes.get("/all", getAllProjects); // Place this first to avoid conflicts
routes.get("/byid/:pid", getProject);
routes.get("/by/:slug", getProjectBySlug);
routes.put("/:pid", upload.fields([{name: "mainImage", maxCount:1}, {name: "gallery", maxCount: 10},{ name: "floorPlanImage", maxCount: 2 }]), updateProject);
routes.get("/city/:slug", getProjectsByCity);
routes.get("/developer/:slug", getProjectsByDeveloper);
routes.get("/searchs", searchProject);
routes.get("/suggestions", getSuggestions);
routes.delete("/:pid", deleteProject);

export default routes;