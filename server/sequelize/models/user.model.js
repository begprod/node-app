const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('user', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		userFirstName: {
			allowNull: false,
			type: DataTypes.STRING,
			unique: false
		},
		userSecondName: {
			allowNull: false,
			type: DataTypes.STRING,
			unique: false
		},
		userPhoneNumber: {
			allowNull: false,
			type: DataTypes.STRING,
			unique: true
		}
	})
}