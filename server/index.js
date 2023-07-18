import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path"
import { fileURLToPath } from "url";
import multer from "multer";
import mongoose from "mongoose";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}))
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// FILE STORAGE
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "public/assets");
    },
    filename: function(req, file, cb){
        cb(null, `${file.originalname}`);
    }
});
const upload = multer({storage});

app.post("/", upload.single("picture"), (req, res)=>{
    const { picturePath } = req.body;
    if(picturePath){
        res.status(201).json({picturePath});
    } else {
        res.status(403).json({error: "Upload a valid file"})
        console.log("lul");
    }
})
app.listen(PORT, ()=>console.log(`Server up and running at port: ${PORT}`));