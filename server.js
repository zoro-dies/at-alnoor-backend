import express from "express";
const app = express();
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
import init from "./routes/index.js";

const PORT = process.env.PORT || 5010;

app.get('/', (req,res) => res.json("server is working"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.options("*", cors());

init(app)

app.listen(PORT, () => console.log(`Server started @PORT: ${PORT}`));