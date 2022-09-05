module.exports = (sequelize, Sequelize) => {
  const Observation = sequelize.define("observation", {
    long: {
      type: Sequelize.STRING,
    },
    lat: {
      type: Sequelize.STRING,
    },
    dateTime: {
      type: Sequelize.STRING,
    },
    weatherCode: {
      type: Sequelize.STRING,
    },
    temperature: {
      type: Sequelize.INTEGER,
    },
    wind: {
      type: Sequelize.INTEGER,
    },
  });

  return Observation;
};
