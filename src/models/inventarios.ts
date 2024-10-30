import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Inventarios = db.define('inventarios', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    // ID se crea automáticamente por Sequelize
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha_ingreso: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fecha_vencimiento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    observaciones: {
        type: DataTypes.TEXT,
        allowNull: true // Permitir nulo si no es necesario
    },
    precio_costo: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    producto_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'productos', // Nombre de la tabla en la base de datos
            key: 'id'           // Campo referenciado en la tabla de productos
        }
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
    tableName: 'inventarios',  
    timestamps: true  // Para que Sequelize maneje automáticamente createdAt y updatedAt
});

export default Inventarios;
