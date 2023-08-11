import {DataTypes} from 'sequelize'
import { sequelize } from '../database/database.js'

sequelize.define('registros', {
    id_registro: {
        type : DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    fecha:{
        type: DataTypes.DATE,
        allowNull: false
    },
    id_usuario:{
        type: DataTypes.INTEGER, 
        allowNull: false,
    },
    id_psicologo:{
        type: DataTypes.INTEGER, 
        allowNull: false,
    },
})