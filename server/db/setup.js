const sequelize = require('../sequelize');

async function reset() {
	console.log('Will rewrite the SQLite example database, adding some dummy data.');

	await sequelize.sync({ force: true });

	await sequelize.models.user.bulkCreate([
		{
			userFirstName: 'jack',
			userSecondName: 'sparrow',
			userPhoneNumber: '459-26-07'
		},
		{
			userFirstName: 'white',
			userSecondName: 'beard',
			userPhoneNumber: '12-23-26-07'
		},
		{
			userFirstName: 'black',
			userSecondName: 'beard',
			userPhoneNumber: '321-26-07'
		},
		{
			userFirstName: 'brown',
			userSecondName: 'beard',
			userPhoneNumber: '123-26-07'
		}
	]);

	console.log('Done!');
}

reset();