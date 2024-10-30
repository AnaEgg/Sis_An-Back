import { Router } from 'express';
import { deleteProducto, getProducto, getProductos, postProducto, updateProducto } from '../controllers/productos';

const Producto = Router();

Producto.get('/', getProductos);         // Obtener todos los productos
Producto.get('/:id', getProducto);       // Obtener un producto por ID
Producto.delete('/:id', deleteProducto); // Eliminar un producto por ID
Producto.post('/', postProducto);        // Crear un nuevo producto
Producto.put('/:id', updateProducto);    // Actualizar un producto por ID

export default Producto;