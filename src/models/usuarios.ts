import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Usuarios = db.define('usuario', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Nom_Usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Contraseña: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    rolId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'rol',  // Asegúrate de que el nombre del modelo sea correcto
            key: 'id'      // Clave primaria de la tabla referenciada
        }
    },
}, {
    tableName: 'usuario',
    timestamps: true
});

export default Usuarios;
