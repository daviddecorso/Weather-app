const axios = require("axios");
const { json } = require("body-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const rateLimiter = require("express-rate-limit");

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

/* const apiRequestLimiter = rateLimiter({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 1,
});

app.use(apiRequestLimiter); */

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

// getMonthlyReport.
// pass in 1-12, 4 tuples
app.post("/getMonthlyReport", jsonParser, (req, res) => {
  // get input
  const month = req.body.month;

  var sunnyDays = 0;
  var snowingDays = 0;
  var rainyDays = 0;
  var gloomyDays = 0;

  const promises = [];

  for (let i = 0; i < 31; i++) {
    const promise = axios
      .post("http://localhost:5000/getWeatherFromDate", {
        date: "2/17/22",
      })
      .then((response) => {
        switch (response.data) {
          case "Sunny":
            sunnyDays += 1;
            break;
          case "Rainy":
            rainyDays += 1;
            break;
          case "Snowy":
            snowingDays += 1;
            break;
          case "Gloomy":
            gloomyDays += 1;
            break;
        }
      });
    promises.push(promise);
  }

  /* function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  } */

  Promise.all(promises).then(() => {
    res.status(200).send({
      sunny: sunnyDays,
      snowing: snowingDays,
      rainy: rainyDays,
      gloomy: gloomyDays,
    });
  });
});

app.listen(port, () => console.log(`Server is running on port: ${port}`));
