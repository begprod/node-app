const { models } = require('../../sequelize');
const { getIdParam } = require('../helpers');

console.log(models);

async function getAll(request, response) {
	const users = await models.user.findAll();
	response.status(200).json(users);
}

async function getById(request, response) {
	const id = getIdParam(request);
	const user = await models.user.findByPk(id);

	// console.log(user);

	if (user) {
		response.status(200).json(user);
	} else {
		response.status(404).send('404 - Not found');
	}
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

async function update(request, response) {
	const id = getIdParam(request);

	// console.log(id);
	// console.log(request.body.data);

	if (id === request.body.id) {
		await models.user.update(request.body.data, {
			where: {
				id: id
			}
		});
		response.status(200).end();
	} else {
		response.status(400).send(`Bad request: param ID (${id}) does not match body ID (${request.body.id}).`);
	}
}

module.exports = {
	getAll,
	getById,
	create,
	update
};