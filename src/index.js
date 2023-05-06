const express = require("express");
const v1MovieRouter = require("./api/v1/routes/movieRoutes");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send({ status: "OK", message: "API is on 🔥" });
});

app.use("/api/v1", v1MovieRouter);

const runServer = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is live on PORT ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

runServer();
