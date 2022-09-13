module.exports = (app) => {
  const shortTerm = require("../controllers/shortTerm.controller.js");

  var router = require("express").Router();

  // Create a new ShortTerm
  router.post("/", shortTerm.create);

  // Retrieve all Shortterm
  router.get("/", shortTerm.findAll);

  app.use("/api/shortTerm", router);
};
