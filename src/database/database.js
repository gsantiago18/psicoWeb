import Sequelize from 'sequelize';

export const sequelize = new Sequelize ("pisoWeb","postgres", "root", 
{
    host: "localhost",
    dialect:"postgres"

});
