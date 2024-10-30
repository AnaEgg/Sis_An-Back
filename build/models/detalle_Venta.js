"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const DetalleVenta = connection_1.default.define('detalle_venta', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    cantidad: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    descuento: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: true
    },
    precio_unitario: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    subtotal: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    total: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    productoId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'productos', // Nombre de la tabla referenciada
            key: 'id' // Clave primaria de la tabla referenciada
        }
    },
    ventaId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'ventas', // Nombre de la tabla referenciada
            key: 'id' // Clave primaria de la tabla referenciada
        }
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW
    }
}, {
    tableName: 'detalle_venta',
    timestamps: true // Para que Sequelize maneje automáticamente createdAt y updatedAt
});
exports.default = DetalleVenta;
