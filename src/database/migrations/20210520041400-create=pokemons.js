const { sequelize } = require("sequelize/lib/model");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('pokemons', {
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false
       },
       name: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       type1: {
          type: Sequelize.STRING,
          allowNull: false,
       },
       type2: {
          type: Sequelize.STRING,
          allowNull: true,
       },
       hp: {
         type: Sequelize.INTEGER,
         allowNull: false
       },
       atk: {
         type: Sequelize.INTEGER,
         allowNull: false,
       },
       def: {
         type: Sequelize.INTEGER,
         allowNull:false,
       },
       spa: {
         type: Sequelize.INTEGER,
         allowNull: false,
       },
       spd: {
         type: Sequelize.INTEGER,
         allowNull: false,
       },
       spe: {
         type: Sequelize.INTEGER,
         allowNull: false,
       },
       total_status: {
         type: Sequelize.INTEGER,
         allowNull: false
       },
       created_at: {
         type: Sequelize.DATE,
         allowNull: false
       },
       updated_at: {
         type: Sequelize.DATE,
         allowNull: false
       }
      });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('pokemons');
  }
};
