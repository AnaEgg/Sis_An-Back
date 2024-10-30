import { DataTypes } from 'sequelize';
import db from '../db/connection';

const DetalleVenta = db.define('detalle_venta', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    descuento: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    precio_unitario: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    subtotal: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    productoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'productos',  // Nombre de la tabla referenciada
            key: 'id'            // Clave primaria de la tabla referenciada
        }
    },
    ventaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'ventas',     // Nombre de la tabla referenciada
            key: 'id'            // Clave primaria de la tabla referenciada
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
    tableName: 'detalle_venta',  
    timestamps: true  // Para que Sequelize maneje automáticamente createdAt y updatedAt
});

export default DetalleVenta;
