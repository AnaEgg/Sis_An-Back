"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const detalle_Venta_1 = require("../controllers/detalle_Venta");
const DetalleVenta = (0, express_1.Router)();
DetalleVenta.get('/', detalle_Venta_1.getDetallesVenta); // Obtener todos los detalles de venta
DetalleVenta.get('/:id', detalle_Venta_1.getDetalleVenta); // Obtener un detalle de venta por ID
DetalleVenta.delete('/:id', detalle_Venta_1.deleteDetalleVenta); // Eliminar un detalle de venta por ID
DetalleVenta.post('/', detalle_Venta_1.postDetalleVenta); // Crear un nuevo detalle de venta
DetalleVenta.put('/:id', detalle_Venta_1.updateDetalleVenta); // Actualizar un detalle de venta por ID
exports.default = DetalleVenta;
