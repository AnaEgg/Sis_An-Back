"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rol_1 = require("../controllers/rol");
const Rol = (0, express_1.Router)();
Rol.get('/', rol_1.getRoles); // Obtener todos los roles
Rol.get('/:id', rol_1.getRol); // Obtener un rol por ID
Rol.delete('/:id', rol_1.deleteRol); // Eliminar un rol por ID
Rol.post('/', rol_1.postRol); // Crear un nuevo rol
Rol.put('/:id', rol_1.updateRol); // Actualizar un rol por ID
exports.default = Rol;
