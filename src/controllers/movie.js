import Movie from "./../models/movie.js";

const getAllMovies = async (req, res) => {
  const movies = await Movie.find();
  res.status(200).json({
    status: "success",
    message: "Movies retrieved successfully",
    data: {
      movies,
    },
  });
};

const getMovie = async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.findById(id);
  if (!movie) {
    return res.status(404).json({
      status: "failed",
      message: "Movie not found of Given Id",
    });
  }

  res.status(200).json({
    status: "success",
    message: "Movie retrieved successfully!",
    data: {
      movie,
    },
  });
};

const addMovie = async (req, res) => {
  const { name, img, summary } = req.body;

  if (!name || !img || !summary) {
    return res.status(400).json({
      status: "failed",
      message: "Missing required fields",
    });
  }

  const movie = await Movie.create({
    name,
    img,
    summary,
  });

  res.status(201).json({
    status: "success",
    message: "Movie added successfully!",
    data: {
      movie,
    },
  });
};

const updateMovie = async (req, res) => {
  const { name, img, summary } = req.body;
  const { id } = req.params;
  const movie = await Movie.findByIdAndUpdate(
    id,
    { name, img, summary },
    { new: true }
  );

  res.status(200).json({
    status: "success",
    message: "Movie retrieved successfully!",
    data: {
      movie,
    },
  });
};

const deleteMovie = async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.findByIdAndDelete(id);

  res.status(200).send({
    status: "success",
    message: "Movie deleted successfully!",
  });
};

export { getAllMovies, addMovie, getMovie, updateMovie, deleteMovie };
