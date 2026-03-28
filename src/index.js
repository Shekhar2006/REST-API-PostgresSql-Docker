import express from "express";
import "dotenv/config";
import cors from "cors";
import pool from "./config/db";

const app = express();
const port = process.env.PORT || 3001;

// middlewares
app.use(express.json());
app.use(cors());

// routes



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});