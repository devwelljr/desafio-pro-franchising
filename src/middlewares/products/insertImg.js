const { NOT_ACCEPTABLE } = require('http-status-codes').StatusCodes;

/* filtros de upload via middleware */
module.exports = (req, res, next) => {
  const { mimetype } = req.file;
  if (mimetype !== ("image/png" || "image/jpg")) {
    return res.status(NOT_ACCEPTABLE).send("file not image");
  }

  next();
};
