import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";


dotenv.config();

const { DB_USER, DB_PASS ,PORT } = process.env;

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.plfe0ce.mongodb.net/real-estate?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB is Successful ");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });

const app = express();
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use((err, req, res, next)=>{
  const statusCode = err.status || 500 ;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })
});
