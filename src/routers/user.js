const router = require("express").Router();

const { create, login } = require('../controllers/users/index.js');
const { registerValidation, loginValidation } = require('../middlewares/users/index');

router.post("/register", registerValidation, create);

router.post("/login", loginValidation, login);

module.exports = router;