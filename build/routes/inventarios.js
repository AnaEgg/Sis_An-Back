"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inventarios_1 = require("../controllers/inventarios");
const Inventario = (0, express_1.Router)();
Inventario.get('/', inventarios_1.getInventarios); // Obtener todos los inventarios
Inventario.get('/:id', inventarios_1.getInventario); // Obtener un inventario por ID
Inventario.delete('/:id', inventarios_1.deleteInventario); // Eliminar un inventario por ID
Inventario.post('/', inventarios_1.postInventario); // Crear un nuevo inventario
Inventario.put('/:id', inventarios_1.updateInventario); // Actualizar un inventario por ID
exports.default = Inventario;
