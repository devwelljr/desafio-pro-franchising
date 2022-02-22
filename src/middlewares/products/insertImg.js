const fs = require("fs");
const { NOT_ACCEPTABLE } = require("http-status-codes").StatusCodes;

/* filtros de upload via middleware */
module.exports = (req, res, next) => {
  const { mimetype, originalname } = req.file;
  if (mimetype !== ("image/png" || "image/jpg")) {
    fs.unlinkSync(`./public/uploads/${originalname}`);
    return res.status(NOT_ACCEPTABLE).send("file not image PNG/JPG");
  }

  next();
};
