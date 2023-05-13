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
        queryOptions.page = Number(reqQuery.page) || 1;
        queryOptions.limit = Number(reqQuery.limit) || 10;
        queryOptions.skip = (queryOptions.page - 1) * queryOptions.limit;

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

const getMovieReleaseYearByTitleId = (reqQuery) => {
    try {
        const title_id = reqQuery.title_id;
        const movie = Movie.getMovieReleaseYearByTitleId(title_id);
        return movie;
    } catch (error) {
        throw error;
    }
};

const getMovieRatingByTitleId = (reqQuery) => {
    try {
        const title_id = reqQuery.title_id;
        const movie = Movie.getMovieRatingByTitleId(title_id);
        return movie;
    } catch (error) {
        throw error;
    }
};

const getMovieCertificateByTitleId = (reqQuery) => {
    try {
        const title_id = reqQuery.title_id;
        const movie = Movie.getMovieCertificateByTitleId(title_id);
        return movie;
    } catch (error) {
        throw error;
    }
};

const getMovieRuntimeByTitleId = (reqQuery) => {
    try {
        const title_id = reqQuery.title_id;
        const movie = Movie.getMovieRuntimeByTitleId(title_id);
        return movie;
    } catch (error) {
        throw error;
    }
};

const getMovieGenreByTitleId = (reqQuery) => {
    try {
        const title_id = reqQuery.title_id;
        const movie = Movie.getMovieGenreByTitleId(title_id);
        return movie;
    } catch (error) {
        throw error;
    }
};

const getTopRatedMovies = (reqQuery) => {
    try {
        const queryOptions = {};
        queryOptions.page = Number(reqQuery.page) || 1;
        queryOptions.limit = Number(reqQuery.limit) || 10;
        queryOptions.skip = (queryOptions.page - 1) * queryOptions.limit;
        const movies = Movie.getTopRatedMovies(queryOptions);
        return movies;
    } catch (error) {
        throw error;
    }
};

const getMoviesByYear = (reqQuery) => {
    try {
        const releaseYear = reqQuery.year;
        const movies = Movie.getMoviesByYear(releaseYear);
        return movies;
    } catch (error) {
        throw error;
    }
};

const getMoviesByCertification = (reqQuery) => {
    try {
        const queryObj = {};
        let certificate = reqQuery.certificate.split(",");
        if (certificate) {
            certificate = certificate.map((c) => c.toUpperCase());
            queryObj.certificate = { $in: certificate };
        }
        const movies = Movie.getMoviesByCertification(queryObj);
        return movies;
    } catch (error) {
        throw error;
    }
};

const getMoviesByGenre = (reqQuery) => {
    try {
        const queryObj = {};
        let genre = reqQuery.genre.split(",");
        if (genre) {
            genre = genre.map((g) => {
                g = g.trim();
                return g[0].toUpperCase() + g.slice(1);
            });
            queryObj.genre = { $in: genre };
        }
        const movies = Movie.getMoviesByGenre(queryObj);
        return movies;
    } catch (error) {
        throw error;
    }
};

const getRandomMovie = () => {
    try {
        const movies = Movie.getRandomMovie();
        return movies;
    } catch (error) {
        throw error;
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
