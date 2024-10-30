"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Inventarios = connection_1.default.define('inventarios', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    // ID se crea automáticamente por Sequelize
    cantidad: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    fecha_ingreso: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    fecha_vencimiento: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    observaciones: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true // Permitir nulo si no es necesario
    },
    precio_costo: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    producto_Id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'productos', // Nombre de la tabla en la base de datos
            key: 'id' // Campo referenciado en la tabla de productos
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
    tableName: 'inventarios',
    timestamps: true // Para que Sequelize maneje automáticamente createdAt y updatedAt
});
exports.default = Inventarios;
