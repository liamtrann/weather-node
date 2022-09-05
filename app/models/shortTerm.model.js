module.exports = (sequelize, Sequelize) => {
  const ShortTerm = sequelize.define("shortTerm", {
    long: {
      type: Sequelize.STRING,
    },
    lat: {
      type: Sequelize.STRING,
    },
    dateTime: {
      type: Sequelize.STRING,
    },
    period: {
      type: Sequelize.INTEGER,
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

  return ShortTerm;
};
