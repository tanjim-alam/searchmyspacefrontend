import express from "express";
import dbConnection from "./src/config/dbConnection.js";
import dotenv from "dotenv";
import authRoutes from "./src/routes/auth.route.js";
import cityRoutes from "./src/routes/city.route.js";
import projectRoutes from "./src/routes/project.route.js";
import developerRoutes from "./src/routes/developer.route.js";
import blogRoutes from "./src/routes/blog.route.js";
import cors from "cors"
dotenv.config();

const app = express();

const corsOption = {
    origin: "https://searchmyspace.vercel.app",
    // origin: "http://localhost:3000",
    credentials: true
}

app.use(express.json());
app.use(cors(corsOption))
app.use(express.urlencoded({ extended: true }));

const PORT = 8082;

app.get("/", async (req, res) => {
    res.json({ message: "Welcome to api" })
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/city", cityRoutes);
app.use("/api/v1/project", projectRoutes);
app.use("/api/v1/developer", developerRoutes);
app.use("/api/v1/blog", blogRoutes);

dbConnection();

app.listen(PORT,()=>{
    console.log("Server is running on post ", PORT);
});