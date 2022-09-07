module.exports = app => {
  const observation = require("../controllers/observation.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", observation.create);

  // Retrieve all Tutorials
  router.get("/", observation.findAll);

  app.use("/api/observation", router);
};
