import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

import goalRoutes from "./routes/goalRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
dotenv.config();
app.use(cors());
const PORT = process.env.PORT || 6000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

//routes
app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server running ${PORT}`);
});
