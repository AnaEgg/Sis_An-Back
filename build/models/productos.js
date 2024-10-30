"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Productos = connection_1.default.define('productos', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nom_producto: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    cant_total: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    perecible: {
        type: sequelize_1.DataTypes.TINYINT,
        allowNull: false
    },
    precio_mayor: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    precio_menor: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    stock: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    tipo_producto: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    unid_medida: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
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
    tableName: 'productos',
    timestamps: true // Para que Sequelize maneje automáticamente createdAt y updatedAt
});
exports.default = Productos;
