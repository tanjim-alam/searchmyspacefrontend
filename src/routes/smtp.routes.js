import { Router } from "express";
import sendEmail from "../mailer/sendEmail.js";

const routes = Router();

routes.post("/sendlead", sendEmail);

export default routes;