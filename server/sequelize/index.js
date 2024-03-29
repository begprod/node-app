const { Sequelize } = require('sequelize');


// In a real app, you should keep the database connection URL as an environment variable.
// But for this example, we will just use a local SQLite database.
// const sequelize = new Sequelize(process.env.DB_CONNECTION_URL);
const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: 'db/example-db.sqlite',
	logQueryParameters: true,
	benchmark: true
});

const models = [
	require('./models/user.model')
];

// We define all models according to their files.
for (const model of models) {
	model(sequelize);
}

module.exports = sequelize;