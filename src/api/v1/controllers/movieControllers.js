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

const getMovieGenreByTitleId = async (req, res) => {
    try {
        const movie = await movieService.getMovieGenreByTitleId(req.params);
        res.status(200).send({ status: "OK", movie: movie });
    } catch (error) {
        res.status(error.status || 500).send({
            status: "FAILED",
            movies: { error: error.message || error },
        });
    }
};

const getTopRatedMovies = async (req, res) => {
    try {
        const movies = await movieService.getTopRatedMovies(req.query);
        res.status(200).send({ status: "OK", movies: movies });
    } catch (error) {
        res.status(error.status || 500).send({
            status: "FAILED",
            movies: { error: error.message || error },
        });
    }
};

const getMoviesByYear = async (req, res) => {
    try {
        const movies = await movieService.getMoviesByYear(req.params);
        res.status(200).send({ status: "OK", movies: movies });
    } catch (error) {
        res.status(error.status || 500).send({
            status: "FAILED",
            movies: { error: error.message || error },
        });
    }
};

const getMoviesByCertification = async (req, res) => {
    try {
        const movies = await movieService.getMoviesByCertification(req.params);
        res.status(200).send({ status: "OK", movies: movies });
    } catch (error) {
        res.status(error.status || 500).send({
            status: "FAILED",
            movies: { error: error.message || error },
        });
    }
};

const getMoviesByGenre = async (req, res) => {
    try {
        const movies = await movieService.getMoviesByGenre(req.params);
        res.status(200).send({ status: "OK", movies: movies });
    } catch (error) {
        res.status(error.status || 500).send({
            status: "FAILED",
            movies: { error: error.message || error },
        });
    }
};

const getRandomMovie = async (req, res) => {
    try {
        const movie = await movieService.getRandomMovie();
        res.status(200).send({ status: "OK", movie: movie });
    } catch (error) {
        res.status(error.status || 500).send({
            status: "FAILED",
            movies: { error: error.message || error },
        });
    }
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
