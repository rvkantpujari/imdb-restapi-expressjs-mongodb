const movieService = require("../services/movieServices");

const getAllMovies = async (req, res) => {
    try {
        const allMovies = await movieService.getAllMovies(req.query);
        res.status(200).send({ status: "OK", movies: allMovies });
    } catch (error) {
        res.status(error.status || 500).send({
            status: "FAILED",
            movies: { error: error.message || error },
        });
    }
};

const getMovieByTitleId = async (req, res) => {
    try {
        const movie = await movieService.getMovieByTitleId(req.params);
        res.status(200).send({ status: "OK", movie: movie });
    } catch (error) {
        res.status(error.status || 500).send({
            status: "FAILED",
            movies: { error: error.message || error },
        });
    }
};

const getMoviePosterByTitleId = (req, res) => {
    const movie = movieService.getMoviePosterByTitleId();
    res.send("Get movie poster by title_id.");
};

const getMovieReleaseYearByTitleId = (req, res) => {
    const movie = movieService.getMovieReleaseYearByTitleId();
    res.send("Get movie release Year by title_id.");
};

const getMovieRatingByTitleId = (req, res) => {
    const movie = movieService.getMovieRatingByTitleId();
    res.send("Get movie rating by title_id.");
};

const getMovieCertificateByTitleId = (req, res) => {
    const movie = movieService.getMovieCertificateByTitleId();
    res.send("Get movie certificate by title_id.");
};

const getMovieRuntimeByTitleId = (req, res) => {
    const movie = movieService.getMovieRuntimeByTitleId();
    res.send("Get movie runtime by title_id.");
};

const getMovieGenreByTitleId = (req, res) => {
    const movie = movieService.getMovieGenreByTitleId();
    res.send("Get movie genre(s) by title_id.");
};

const getTopRatedMovies = (req, res) => {
    const movies = movieService.getTopRatedMovies();
    res.send("Get a list of top-rated Movies.");
};

const getMoviesByYear = (req, res) => {
    const movies = movieService.getMoviesByYear();
    res.send("Get a list of movies released in a specific year.");
};

const getMoviesByCertification = (req, res) => {
    const movies = movieService.getMoviesByCertification();
    res.send("Get a list of movies with a specific certification rating.");
};

const getMoviesByGenre = (req, res) => {
    const movies = movieService.getMoviesByGenre();
    res.send("Get a list of movies with a specific genre.");
};

const getRandomMovie = (req, res) => {
    const movie = movieService.getRandomMovie();
    res.send("Get a random movie.");
};

module.exports = {
    getAllMovies,
    getMovieByTitleId,
    getMoviePosterByTitleId,
    getMovieReleaseYearByTitleId,
    getMovieRatingByTitleId,
    getMovieCertificateByTitleId,
    getMovieRuntimeByTitleId,
    getMovieGenreByTitleId,
    getTopRatedMovies,
    getMoviesByYear,
    getMoviesByCertification,
    getMoviesByGenre,
    getRandomMovie,
};
