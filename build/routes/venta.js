"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const venta_1 = require("../controllers/venta");
const Venta = (0, express_1.Router)();
Venta.get('/', venta_1.getVentas); // Obtener todas las ventas
Venta.get('/:id', venta_1.getVenta); // Obtener una venta por ID
Venta.delete('/:id', venta_1.deleteVenta); // Eliminar una venta por ID
Venta.post('/', venta_1.postVenta); // Crear una nueva venta
Venta.put('/:id', venta_1.updateVenta); // Actualizar una venta por ID
exports.default = Venta;
