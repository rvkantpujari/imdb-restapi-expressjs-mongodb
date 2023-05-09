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

module.exports = {
    getAllMovies,
    getMovieByTitleId,
    getMoviePosterByTitleId,
    getMovieReleaseYearByTitleId,
};
