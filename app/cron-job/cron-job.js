const cron = require("node-cron");
const axios = require("axios");
const db = require("../models");
const Observation = db.observation;

cron.schedule("*/10 * * * *", () => {
  const lat = 43.5100092;
  const long = -79.8976626;
  axios
    .get(
      `https://weatherapi.pelmorex.com/v1/observation?lat=${lat}&long=${long}`
    )
    .then((resp) => {
      console.log(resp.data);
      // Create an observation
      const observation = {
        long: long,
        lat: lat,
        dateTime: resp.data.time.local,
        weatherCode: resp.data.weatherCode.value,
        temperature: resp.data.temperature,
        wind: resp.data.wind.speed,
      };
      Observation.create(observation);
    })
    .catch((err) => console.log(err));
});
