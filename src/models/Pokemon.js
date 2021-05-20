const { Model, DataTypes } = require('sequelize');

class Pokemon extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            type1: DataTypes.STRING,
            type2: DataTypes.STRING,
            hp: DataTypes.INTEGER,
            atk: DataTypes.INTEGER,
            def: DataTypes.INTEGER,
            spa: DataTypes.INTEGER,
            spd: DataTypes.INTEGER,
            spe: DataTypes.INTEGER,
            totalStatus: DataTypes.INTEGER,
        }, {
            sequelize: connection
        })
    }

}

module.exports = Pokemon;