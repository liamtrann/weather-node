const db = require("../models");
const ShortTerm = db.shortTerm;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.long | !req.body.lat) {
    res.status(400).send({
      message: "long/lat can not be empty!",
    });
    return;
  }

  const allShortTerm = req.body.shortterm.map((data) => {
    // Create an shortTerm
    return {
      long: req.body.long,
      lat: req.body.lat,
      dateTime: data.time.local,
      period: data.period,
      weatherCode: data.weatherCode.value,
      temperature: data.temperature.value,
      wind: data.wind.speed,
    };
  });

  // Save Tutorial in the database
  ShortTerm.bulkCreate(allShortTerm)
    .then(() => {
      res.send("data have been saved");
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the shortTerm.",
      });
    });
};

// Retrieve all shortTerms from the database.
exports.findAll = (req, res) => {
  const long = req.body.long;
  const lat = req.body.lat;
  var condition = {};
  if (long) condition.long = long;
  if (lat) condition.lat = lat;

  ShortTerm.findAll({ where: condition })
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
