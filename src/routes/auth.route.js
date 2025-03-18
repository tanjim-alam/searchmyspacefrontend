import { Router } from "express";
import { getProfile, login, register } from "../controllers/auth.controller.js";

const route = Router();

route.post("/register", register);
route.post("/login", login);
route.get("/profile", getProfile);

export default route;