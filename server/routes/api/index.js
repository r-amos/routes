const express = require("express");
const routesController = require("./routes");
const commentsController = require("./comments");
const { handleDatabaseError } = require("../../middleware/errorHandlers");

const router = express.Router();

router.use("/routes", routesController);
router.use("/comments", commentsController);

//Define Error Handling Middleware
router.use(handleDatabaseError);

module.exports = router;
