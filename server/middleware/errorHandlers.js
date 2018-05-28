const { MongoError } = require("mongodb");

const handleDatabaseError = (error, req, res, next) => {
  if (error instanceof MongoError) {
    return res.status(503).json({
      type: "MongoError",
      message: error.message
    });
  }
  next(error);
};

module.exports = {
  handleDatabaseError
};
