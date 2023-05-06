const express = require("express");

const router = express.Router();

// Retrieves a list of all movies in the database
router.get("/movies", (req, res) => {
    res.status(200).send({
        message: "Retrieves a list of all movies in the database.",
    });
});

// Retrieves a specific movie by its unique title_id
router.get("/movie/id/:title_id", (req, res) => {
    res.status(200).send({
        message: "Retrieves a specific movie by its unique title_id.",
    });
});

// Retrieves the poster image for a specific movie
router.get("/movie/:title_id/poster", (req, res) => {
    res.status(200).send({
        message: "Retrieves the poster image for a specific movie.",
    });
});

// Retrieves the release year for a specific movie
router.get("/movie/:title_id/year", (req, res) => {
    res.status(200).send({
        message: "Retrieves the release year for a specific movie.",
    });
});

// Retrieves the rating for a specific movie
router.get("/movie/:title_id/rating", (req, res) => {
    res.status(200).send({
        message: "Retrieves the rating for a specific movie.",
    });
});

// Retrieves the certificate rating for a specific movie (e.g. PG-13, R, etc.)
router.get("/movie/:title_id/certificate", (req, res) => {
    res.status(200).send({
        message: "Retrieves the certificate rating for a specific movie.",
    });
});

// Retrieves the runtime (in minutes) for a specific movie
router.get("/movie/:title_id/runtime", (req, res) => {
    res.status(200).send({
        message: "Retrieves the runtime (in minutes) for a specific movie.",
    });
});

// Retrieves the genre(s) for a specific movie
router.get("/movie/:title_id/genre", (req, res) => {
    res.status(200).send({
        message: "Retrieves the genre(s) for a specific movie.",
    });
});

// Retrieves a list of the top-rated movies in the database
router.get("/movies/top_rated", (req, res) => {
    res.status(200).send({
        message: "Retrieves a list of the top-rated movies in the database.",
    });
});

// Retrieves a list of movies released in a specific year
router.get("/movies/:year", (req, res) => {
    res.status(200).send({
        message: "Retrieves a list of movies released in a specific year.",
    });
});

// Retrieves a list of movies with a specific certificate rating
router.get("/movies/certificate/:certificate", (req, res) => {
    res.status(200).send({
        message:
            "Retrieves a list of movies with a specific certificate rating.",
    });
});

// Retrieves a list of movies with a specific genre
router.get("/movies/genre/:genre", (req, res) => {
    res.status(200).send({
        message: "Retrieves a list of movies with a specific genre.",
    });
});

// Retrieves a random movie from the database
router.get("/movie/random", (req, res) => {
    res.status(200).send({
        message: "Retrieves a random movie from the database.",
    });
});

module.exports = router;
