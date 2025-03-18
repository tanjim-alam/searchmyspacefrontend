import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { authorizedRoles, verifyToken } from "../middlewares/auth.middleware.js";
import { addDeveloper, deleteDeveloper, getAllDevelopers, updateDeveloper } from "../controllers/developer.controller.js";

const route = Router();

route.post("/add",verifyToken, authorizedRoles("admin"), upload.single("developerLogo"), addDeveloper);
route.get("/all", getAllDevelopers);
route.put("/update/:did",verifyToken, authorizedRoles("admin"), upload.single("developerLogo"), updateDeveloper);
route.delete("/delete/:did",verifyToken, authorizedRoles("admin"), deleteDeveloper);
export default route;

// fields([{name: "image", maxCount:1}])