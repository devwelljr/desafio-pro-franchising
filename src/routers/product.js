const router = require("express").Router();

const { create, myProducts, deleteProduct, insertImage } = require("../controllers/products/index.js");
const validationJWT = require("../middlewares/validationJWT");
const { createValidation, upload, fileFilter } = require("../middlewares/products/index");

router.put("/:id/image", validationJWT, upload, fileFilter, insertImage);

router.post("/new", validationJWT, createValidation, create);

router.get('/myProducts', validationJWT, myProducts);

router.delete('/deleteProduct/:id', validationJWT, deleteProduct);

module.exports = router;
