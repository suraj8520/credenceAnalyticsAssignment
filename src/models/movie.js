import { Schema, model } from "mongoose";

const movieSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  summary: {
    type: String,
    required: true,
  },
});

const Movie = model("Movie", movieSchema);
export default Movie;
