const { MongoError } = require("mongodb");

const handleDatabaseError = (error, req, res, next) => {
  if (error instanceof MongoError) {
    return res.status(503).json({
      type: "MongoError",
      message: error.message
    });
  }
  next(err);
};

// TODO: Meaningful Errors
const notFound = (req, res, next) => {
  return res.status(404).json({
    type: "Not Found",
    message: "Stuff"
  });
};

module.exports = {
  handleDatabaseError,
  notFound
};
