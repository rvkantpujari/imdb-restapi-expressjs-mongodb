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

const getMoviePosterByTitleId = async (req, res) => {
    try {
        const movie = await movieService.getMoviePosterByTitleId(req.params);
        res.status(200).send({ status: "OK", movie: movie });
    } catch (error) {
        res.status(error.status || 500).send({
            status: "FAILED",
            movies: { error: error.message || error },
        });
    }
};

const getMovieReleaseYearByTitleId = async (req, res) => {
    try {
        const movie = await movieService.getMovieReleaseYearByTitleId(
            req.params
        );
        res.status(200).send({ status: "OK", movie: movie });
    } catch (error) {
        res.status(error.status || 500).send({
            status: "FAILED",
            movies: { error: error.message || error },
        });
    }
};

const getMovieRatingByTitleId = async (req, res) => {
    try {
        const movie = await movieService.getMovieRatingByTitleId(req.params);
        res.status(200).send({ status: "OK", movie: movie });
    } catch (error) {
        res.status(error.status || 500).send({
            status: "FAILED",
            movies: { error: error.message || error },
        });
    }
};

const getMovieCertificateByTitleId = async (req, res) => {
    try {
        const movie = await movieService.getMovieCertificateByTitleId(
            req.params
        );
        res.status(200).send({ status: "OK", movie: movie });
    } catch (error) {
        res.status(error.status || 500).send({
            status: "FAILED",
            movies: { error: error.message || error },
        });
    }
};

const getMovieRuntimeByTitleId = async (req, res) => {
    try {
        const movie = await movieService.getMovieRuntimeByTitleId(req.params);
        res.status(200).send({ status: "OK", movie: movie });
    } catch (error) {
        res.status(error.status || 500).send({
            status: "FAILED",
            movies: { error: error.message || error },
        });
    }
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
