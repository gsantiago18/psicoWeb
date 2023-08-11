import {DataTypes} from 'sequelize'
import { sequelize } from '../database/database.js'

sequelize.define('usuarios', {
    id_usuario: {
        type : DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    edad:{
        type: DataTypes.INTEGER, 
        allowNull: false,
    },
    genero:{
        type: DataTypes.STRING, 
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING(50), 
        unique: true,
    },
    id_credencial:{
        type: DataTypes.INTEGER,
        references:'credenciales', 
    }
})