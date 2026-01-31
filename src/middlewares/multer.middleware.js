import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// Define __dirname manually for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const tempDir = path.join(__dirname, "public", "temp");

    // Ensure directory exists
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }

    // Ensure directory is writable (Fixed: Using `fs.accessSync`)
    try {
      fs.accessSync(tempDir, fs.constants.W_OK);
      cb(null, tempDir);
    } catch (err) {
      console.error("Directory is not writable:", err);
      cb(new Error("Directory is not writable"), false);
    }
  },
  filename: function (req, file, cb) {
    // Append timestamp to filename to avoid conflicts
    const timestamp = Date.now();
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext);
    cb(null, `${baseName}-${timestamp}${ext}`);
  },
});

export const upload = multer({ storage });
