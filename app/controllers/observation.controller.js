const db = require("../models");
const Observation = db.observation;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.long | !req.body.lat) {
    res.status(400).send({
      message: "weatherCode can not be empty!",
    });
    return;
  }

  // Create an observation
  const observation = {
    long: req.body.long,
    lat: req.body.lat,
    dateTime: req.body.time.local,
    weatherCode: req.body.weatherCode.value,
    temperature: req.body.temperature,
    wind: req.body.wind.speed,
  };

  // Save Tutorial in the database
  Observation.create(observation)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the observation.",
      });
    });
};

// Retrieve all observations from the database.
exports.findAll = (req, res) => {
  const long = req.body.long;
  const lat = req.body.lat;
  var condition = {};
  if (long) condition.long = long
  if (lat) condition.lat = lat
  
  Observation.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
