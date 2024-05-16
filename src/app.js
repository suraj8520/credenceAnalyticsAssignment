import express from "express";
import movieRouter from "./routes/movie";

const app = express();
app.use(express.json());

app.use("/api/v1/movies", movieRouter);

app.use("*", (req, res) => {
  res.status(404).json({
    status: "failed!",
    message: "The page you're looking for doesn't exist",
  });
});

export default app;
