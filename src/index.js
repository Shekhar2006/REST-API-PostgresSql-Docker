import express from "express";
import "dotenv/config";
import cors from "cors";
import pool from "./config/db.js";

const app = express();
const port = process.env.PORT || 3001;

// middlewares
app.use(express.json());
app.use(cors());

// routes

app.get("/", async(req , res)=>{
    const result = await pool.query("SELECT current_database()");
    res.json(`The database name is : ${result.rows[0].current_database}`);
})


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});