const express = require("express");
const movieController = require("../controllers/movieControllers");

const router = express.Router();

// Retrieves a list of all movies in the database
router.get("/movies", movieController.getAllMovies);

// Retrieves a specific movie by its unique title_id
router.get("/movie/id/:title_id", movieController.getMovieByTitleId);

// Retrieves the poster image for a specific movie
router.get("/movie/:title_id/poster", movieController.getMoviePosterByTitleId);

// Retrieves the release year for a specific movie
router.get(
    "/movie/:title_id/year",
    movieController.getMovieReleaseYearByTitleId
);

// Retrieves the rating for a specific movie
router.get("/movie/:title_id/rating", movieController.getMovieRatingByTitleId);

// Retrieves the certificate rating for a specific movie (e.g. PG-13, R, etc.)
router.get(
    "/movie/:title_id/certificate",
    movieController.getMovieCertificateByTitleId
);

// Retrieves the runtime (in minutes) for a specific movie
router.get(
    "/movie/:title_id/runtime",
    movieController.getMovieRuntimeByTitleId
);

// Retrieves the genre(s) for a specific movie
router.get("/movie/:title_id/genre", movieController.getMovieGenreByTitleId);

// Retrieves a list of the top-rated movies in the database
router.get("/movies/top_rated", movieController.getTopRatedMovies);

// Retrieves a list of movies released in a specific year
router.get("/movies/:year", movieController.getMoviesByYear);

// Retrieves a list of movies with a specific certificate rating
router.get(
    "/movies/certificate/:certificate",
    movieController.getMoviesByCertification
);

// Retrieves a list of movies with a specific genre
router.get("/movies/genre/:genre", movieController.getMoviesByGenre);

// Retrieves a random movie from the database
router.get("/movie/random", movieController.getRandomMovie);

module.exports = router;
