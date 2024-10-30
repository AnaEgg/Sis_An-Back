import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Venta = db.define('venta', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    productoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'productos',  // Nombre de la tabla referenciada
            key: 'id'            // Clave primaria de la tabla referenciada
        }
    },
    cliente_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'clientes', // Nombre de la tabla en la base de datos
            key: 'id'           // Campo referenciado en la tabla de productos
        }
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        references: {
            model: 'usuario', // Nombre de la tabla en la base de datos
            key: 'id'           // Campo referenciado en la tabla de productos
        }
    },
    detalles: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    total: {
        type: DataTypes.FLOAT,
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
    tableName: 'venta',
    timestamps: true  // Para que Sequelize maneje automáticamente createdAt y updatedAt
});

export default Venta;
