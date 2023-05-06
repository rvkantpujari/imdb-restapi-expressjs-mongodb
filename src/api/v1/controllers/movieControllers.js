const getAllMovies = (req, res) => {
    res.send("Get all movies.");
};

const getMovieByTitleId = (req, res) => {
    res.send("Get movie by title_id.");
};

const getMoviePosterByTitleId = (req, res) => {
    res.send("Get movie poster by title_id.");
};

const getMovieReleaseYearByTitleId = (req, res) => {
    res.send("Get movie release Year by title_id.");
};

const getMovieRatingByTitleId = (req, res) => {
    res.send("Get movie rating by title_id.");
};

const getMovieCertificateByTitleId = (req, res) => {
    res.send("Get movie certificate by title_id.");
};

const getMovieRuntimeByTitleId = (req, res) => {
    res.send("Get movie runtime by title_id.");
};

const getMovieGenreByTitleId = (req, res) => {
    res.send("Get movie genre(s) by title_id.");
};

const getTopRatedMovies = (req, res) => {
    res.send("Get a list of top-rated Movies.");
};

const getMoviesByYear = (req, res) => {
    res.send("Get a list of movies released in a specific year.");
};

const getMoviesByCertification = (req, res) => {
    res.send("Get a list of movies with a specific certification rating.");
};

const getMoviesByGenre = (req, res) => {
    res.send("Get a list of movies with a specific genre.");
};

const getRandomMovie = (req, res) => {
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
