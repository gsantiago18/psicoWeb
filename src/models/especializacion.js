import {DataTypes} from 'sequelize'
import { sequelize } from '../database/database.js'

sequelize.define('especializacion', {
    id_especializacion: {
        type : DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    id_psicologo:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING, 
        allowNull: false,
    }
})

