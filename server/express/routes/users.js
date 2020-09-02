const { models } = require('../../sequelize');
const { getIdParam } = require('../helpers');

console.log(models);

async function getAll(request, response) {
	const users = await models.user.findAll();
	response.status(200).json(users);
}

async function create(request, response) {
	console.log(request.body);
	console.log(request.body.data);

	if (request.body.id) {
		response.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`);
	} else {
		await models.user.create(request.body.data);
		response.status(201).end();
	}
}

module.exports = {
	getAll,
	create
};