const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");

// Setting up the server
const app = express();
const port = 5000;

app.use(
  cors({
    origin: "http://localhost:8080",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

const jsonParser = bodyParser.json();

app.post("/getWeatherFromDate", jsonParser, (req, res) => {
  // Get the date
  const date = req.body.date;

  // Get a random number
  const randNum = Math.floor(Math.random() * 4);

  // Pick a weather type from the random number.
  let weatherType = "";
  switch (randNum) {
    case 0:
      weatherType = "Sunny";
      break;
    case 1:
      weatherType = "Rainy";
      break;
    case 2:
      weatherType = "Snowy";
      break;
    case 3:
      weatherType = "Gloomy";
      break;
  }
  res.status(200).send(weatherType);
});

app.post("/getUmbrella", jsonParser, (req, res) => {
  // Get the date
  const date = req.body.date;

  // Make a request to the get weather api to see if it's raining or not.
  axios
    .post("http://localhost:5000/getWeatherFromDate", {
      date: date,
    })
    .then((response) => {
      if (response.data === "Rainy") {
        res.status(200).send(true);
      } else {
        res.status(200).send(false);
      }
    });
});

app.listen(port, () => console.log(`Server is running on port: ${port}`));
