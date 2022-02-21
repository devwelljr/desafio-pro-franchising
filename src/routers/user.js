const router = require("express").Router();

const { create, login } = require('../controllers/users/index.js');
const { registerValidation } = require('../middlewares/users/index');

router.post("/register", registerValidation, create);

router.post("/login", login);

module.exports = router;