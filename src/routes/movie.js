import express from "express";
import asyncHandler from "../utils/asyncHandler.js";
import {
  addMovie,
  getAllMovies,
  getMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/movie.js";

const router = express.Router();

router.get("/", asyncHandler(getAllMovies));
router.post("/", asyncHandler(addMovie));
router.get("/:id", asyncHandler(getMovie));
router.patch("/:id", asyncHandler(updateMovie));
router.delete("/:id", asyncHandler(deleteMovie));

export default router;
