module.exports = (app) => {
  const shortTerm = require("../controllers/shortTerm.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", shortTerm.create);

  // Retrieve all Tutorials
  router.get("/", shortTerm.findAll);

  app.use("/api/shortTerm", router);
};
