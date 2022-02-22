const router = require("express").Router();

const {
  create,
  myProducts,
  edit,
  deleteProduct,
  insertImage,
} = require("../controllers/products/index.js");
const {
  createValidation,
  upload,
  fileFilter,
} = require("../middlewares/products/index");
const validationJWT = require("../middlewares/validationJWT");

router.put("/:id/image", validationJWT, upload, fileFilter, insertImage);

router.put("/edit/:id", validationJWT, edit);

router.post("/new", validationJWT, createValidation, create);

router.get("/myProducts", validationJWT, myProducts);

router.delete("/deleteProduct/:id", validationJWT, deleteProduct);

module.exports = router;
