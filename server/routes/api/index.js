const express = require("express");
const routesController = require("./routes");
const { handleDatabaseError } = require("../../middleware/errorHandlers");

const router = express.Router();

router.use("/routes", routesController);

//Define Error Handling Middleware
router.use(handleDatabaseError);

module.exports = router;
