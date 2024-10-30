import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Productos = db.define('productos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    
    nom_producto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cant_total: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    perecible: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    precio_mayor: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    precio_menor: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tipo_producto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    unid_medida: {
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
    }
}, {
    tableName: 'productos',  
    timestamps: true  // Para que Sequelize maneje automáticamente createdAt y updatedAt
});

export default Productos;
