const Movie = require("../models/movie");

const getAllMovies = async (queryObj, queryOptions) => {
    try {
        const allMovies = await Movie.find(queryObj)
            .sort(queryOptions.sort)
            .limit(queryOptions.limit)
            .skip(queryOptions.skip);
        return allMovies;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const getMovieByTitleId = async (title_id) => {
    try {
        const movie = await Movie.find({ title_id });
        return movie;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const getMoviePosterByTitleId = async (title_id) => {
    try {
        const movie = await Movie.find({ title_id }).select({
            poster: 1,
            _id: 0,
        });
        return movie;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const getMovieReleaseYearByTitleId = async (title_id) => {
    try {
        const movie = await Movie.find({ title_id }).select({
            releaseYear: 1,
            _id: 0,
        });
        return movie;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const getMovieRatingByTitleId = async (title_id) => {
    try {
        const movie = await Movie.find({ title_id }).select({
            rating: 1,
            _id: 0,
        });
        return movie;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const getMovieCertificateByTitleId = async (title_id) => {
    try {
        const movie = await Movie.find({ title_id }).select({
            certificate: 1,
            _id: 0,
        });
        return movie;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const getMovieRuntimeByTitleId = async (title_id) => {
    try {
        const movie = await Movie.find({ title_id }).select({
            runtime: 1,
            _id: 0,
        });
        return movie;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const getMovieGenreByTitleId = async (title_id) => {
    try {
        const movie = await Movie.find({ title_id }).select({
            genre: 1,
            _id: 0,
        });
        return movie;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const getMoviesByYear = async (releaseYear) => {
    try {
        const movies = await Movie.find({ releaseYear });
        return movies;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const getRandomMovie = async () => {
    try {
        const moviesCount = await Movie.countDocuments();
        const randNum = Math.floor(Math.random() * moviesCount);
        console.log(randNum);
        const movies = await Movie.findOne().skip(randNum);
        return movies;
    } catch (error) {
        throw { status: 500, message: error };
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
    getMoviesByYear,
    getRandomMovie,
};
