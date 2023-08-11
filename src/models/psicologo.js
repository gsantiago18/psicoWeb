import {DataTypes} from 'sequelize'
import { sequelize } from '../database/database.js'

sequelize.define('psicologos', {
    id_psicologos: {
        type : DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    id_especializacion:{
        type: DataTypes.INTEGER, 
        allowNull: false,
    },
    experiencia:{
        type: DataTypes.TEXT(1024),
    },
    id_credencial:{
        type: DataTypes.INTEGER,
    }

})