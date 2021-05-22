'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('images', { 
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false,
       },
       pokemon_id: {
         type: Sequelize.INTEGER,
         allowNull: false,
         references: {model: 'pokemons', key: 'id'},
         onUpdate: 'CASCADE',
         onDelete: 'CASCADE'
       },
       name: {
          type: Sequelize.STRING,
          allowNull: false
       },
       url: {
         type: Sequelize.STRING,
         allowNull: false,
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
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
