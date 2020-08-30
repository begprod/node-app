const { models } = require('../../sequelize');
const { getIdParam } = require('../helpers');

async function getAll(request, response) {
	const users = await models.user.findAll();
	response.status(200).json(users);
}

module.exports = {
	getAll
};