"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productos_1 = require("../controllers/productos");
const Producto = (0, express_1.Router)();
Producto.get('/', productos_1.getProductos); // Obtener todos los productos
Producto.get('/:id', productos_1.getProducto); // Obtener un producto por ID
Producto.delete('/:id', productos_1.deleteProducto); // Eliminar un producto por ID
Producto.post('/', productos_1.postProducto); // Crear un nuevo producto
Producto.put('/:id', productos_1.updateProducto); // Actualizar un producto por ID
exports.default = Producto;
