import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { authorizedRoles, verifyToken } from "../middlewares/auth.middleware.js";
import { addCity, deleteCity, getAllCity, updateCity } from "../controllers/city.controller.js";

const route = Router();

route.post("/add",verifyToken, authorizedRoles("admin"), upload.single("image"), addCity);
route.get("/all", getAllCity);
route.put("/update/:cid",verifyToken, authorizedRoles("admin"), upload.single("image"), updateCity);
route.delete("/delete/:cid",verifyToken, authorizedRoles("admin"), deleteCity);
export default route;

// fields([{name: "image", maxCount:1}])