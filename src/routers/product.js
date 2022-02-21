const router = require("express").Router();

const { create, insertImage } = require("../controllers/products/index.js");
const validationJWT = require("../middlewares/validationJWT");
const { createValidation, upload } = require("../middlewares/products/index");

router.put("/:id/image", validationJWT, upload, insertImage);

router.post("/new", validationJWT, createValidation, create);

module.exports = router;
