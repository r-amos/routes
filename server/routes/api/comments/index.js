const express = require("express");
const commentsController = require("../../../controllers/api/comments");
const router = express.Router();

router.use("/", commentsController);

module.exports = router;
