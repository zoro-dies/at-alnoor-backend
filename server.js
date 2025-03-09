import express from "express";
const app = express();
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
import init from "./routes/index.js";


const PORT = process.env.PORT || 5010;

init(app)
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.options("*", cors());



app.listen(PORT, () => console.log(`Server started @PORT: ${PORT}`));