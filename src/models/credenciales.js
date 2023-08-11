
import {DataTypes} from 'sequelize'
import { sequelize } from '../database/database.js'

sequelize.define('credenciales', {
    id_credencial: {
        type : DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    usuario:{
        type: DataTypes.STRING,
        allowNull: false
    },
    contraseña:{
        type: DataTypes.STRING, 
        allowNull: false,
    }
})
