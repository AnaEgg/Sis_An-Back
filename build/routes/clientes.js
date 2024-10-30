"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientes_1 = require("../controllers/clientes");
const Clientes = (0, express_1.Router)();
Clientes.get('/', clientes_1.getClientes); // Obtener todos los clientes
Clientes.get('/:id', clientes_1.getCliente); // Obtener un cliente por ID
Clientes.delete('/:id', clientes_1.deleteCliente); // Eliminar un cliente por ID
Clientes.post('/', clientes_1.postCliente); // Crear un nuevo cliente
Clientes.put('/:id', clientes_1.updateCliente); // Actualizar un cliente por ID
exports.default = Clientes;
