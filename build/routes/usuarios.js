"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("../controllers/usuarios");
const Usuario = (0, express_1.Router)();
Usuario.get('/', usuarios_1.getUsuarios); // Obtener todos los usuarios
Usuario.get('/:id', usuarios_1.getUsuario); // Obtener un usuario por ID
Usuario.delete('/:id', usuarios_1.deleteUsuario); // Eliminar un usuario por ID
Usuario.post('/', usuarios_1.postUsuario); // Crear un nuevo usuario
Usuario.put('/:id', usuarios_1.updateUsuario); // Actualizar un usuario por ID
exports.default = Usuario;
