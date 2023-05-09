const Movie = require("../config/Movie");

const getAllMovies = (reqQuery) => {
    try {
        const queryObj = {};
        if (reqQuery.title_id) {
            queryObj.title_id = { $regex: reqQuery.title_id, $options: "i" };
        }
        if (reqQuery.title) {
            queryObj.title = { $regex: reqQuery.title, $options: "i" };
        }
        if (reqQuery.certificate) {
            queryObj.certificate = {
                $regex: reqQuery.certificate,
                $options: "i",
            };
        }
        if (reqQuery.runtime) {
            queryObj.runtime = { $regex: reqQuery.runtime, $options: "i" };
        }
        if (reqQuery.description) {
            queryObj.description = {
                $regex: reqQuery.description,
                $options: "i",
            };
        }
        if (reqQuery.genre) {
            let genre = reqQuery.genre.split(",");
            genre = genre.join("|");
            queryObj.genre = { $regex: genre, $options: "i" };
        }

        if (reqQuery.releaseYear) {
            queryObj.releaseYear = reqQuery.releaseYear;
        }
        if (reqQuery.rating) {
            queryObj.rating = reqQuery.rating;
        }

        const queryOptions = {};
        queryOptions.page = reqQuery.page || 1;
        queryOptions.limit = reqQuery.limit || 10;
        queryOptions.skip =
            (Number(reqQuery.page) - 1) * Number(reqQuery.limit);

        if (reqQuery.sort) {
            queryOptions.sort = reqQuery.sort.replace(",", " ");
        }

        const allMovies = Movie.getAllMovies(queryObj, queryOptions);
        return allMovies;
    } catch (error) {
        throw error;
    }
};

const getMovieByTitleId = (reqQuery) => {
    try {
        const title_id = reqQuery.title_id;
        const movie = Movie.getMovieByTitleId(title_id);
        return movie;
    } catch (error) {
        throw error;
    }
    return;
};

const getMoviePosterByTitleId = (reqQuery) => {
    try {
        const title_id = reqQuery.title_id;
        const movie = Movie.getMoviePosterByTitleId(title_id);
        return movie;
    } catch (error) {
        throw error;
    }
};

const getMovieReleaseYearByTitleId = () => {
    return;
};

const getMovieRatingByTitleId = () => {
    return;
};

const getMovieCertificateByTitleId = () => {
    return;
};

const getMovieRuntimeByTitleId = () => {
    return;
};

const getMovieGenreByTitleId = () => {
    return;
};

const getTopRatedMovies = () => {
    return;
};

const getMoviesByYear = () => {
    return;
};

const getMoviesByCertification = () => {
    return;
};

const getMoviesByGenre = () => {
    return;
};

const getRandomMovie = () => {
    return;
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
