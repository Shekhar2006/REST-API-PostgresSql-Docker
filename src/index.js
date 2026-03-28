import express from "express";
import "dotenv/config";
import cors from "cors";
import pool from "./config/db.js";
import userRoutes from "./routes/user.route.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();
const port = process.env.PORT || 3001;

// middlewares
app.use(express.json());
app.use(cors());
app.use(errorHandler);

// routes

app.get("/", async(req , res)=>{
    const result = await pool.query("SELECT current_database()");
    res.json(`The database name is : ${result.rows[0].current_database}`);
});

app.use("/api", userRoutes);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});