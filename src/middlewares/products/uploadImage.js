const multer = require("multer");

/* Configuracao de destino do arquivo e nome com padrao originalName */
const upload = multer({
  storage: multer.diskStorage({
    destination: (_req, file, callback) => {
      callback(null, "public/uploads/");
    },
    filename: (_req, file, callback) => {
      callback(null, file.originalname);
    },
  })
}).single("image");

module.exports = upload;
