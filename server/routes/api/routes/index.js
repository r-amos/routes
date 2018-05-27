const express = require("express");
const routesController = require("../../../controllers/api/routes");

const router = express.Router();

router.use("/", routesController);

module.exports = router;
