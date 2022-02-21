require('dotenv').config();

const rescue = require('express-rescue');
const { CREATED, NOT_ACCEPTABLE } = require('http-status-codes').StatusCodes;
const { createUser } = require('../../services/users/index');

/* Criação de um cliente */
module.exports = rescue(async (req, res) => {
	const { username, email, password } = req.body;

	const newUser = await createUser({ username, email, password });

	if (newUser.err) {
		console.log(newUser.err);
		return res.status(NOT_ACCEPTABLE).send(newUser.err);
	}

	return res.status(CREATED).json({ newUser });
});
