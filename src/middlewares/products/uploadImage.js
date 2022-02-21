const fs = require("fs");
const path = require("path");
const multer = require("multer");

/* Funcao para evitar arquivos repetidos */
const fileExists = (fileName) => {
  const files = fs.readdirSync(
    path.join(__dirname, "..", "..", "..", "public", "uploads")
    );
  console.log(files);

  return files.some((file) => file === fileName);
};

/* Configuracao de destino do arquivo e nome com padrao originalName */
const upload = multer({
  storage: multer.diskStorage({
    destination: (_req, file, callback) => {
      callback(null, "public/uploads/");
    },
    filename: (_req, file, callback) => {
      callback(null, file.originalname);
    },
  }),
  /* filtros de upload via multer */
  fileFilter: (req, file, callback) => {
    const ext = file.mimetype;
    if (ext !== ("image/png" || "image/jpg")) {
      req.fileValidationError = true;
      return callback(null, false, new Error('goes wrong on the mimetype'));
    }
    if (fileExists(file.originalname)) {
      req.fileDuplicated = true;
      return callback(null, false, new Error('file duplicate'));
    }
    callback(null, true);
  },
});

module.exports = upload.single("image");
