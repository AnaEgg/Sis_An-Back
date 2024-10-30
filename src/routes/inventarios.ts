import { Router } from 'express';
import { 
    deleteInventario, getInventario, getInventarios,  postInventario, updateInventario } from '../controllers/inventarios';

const Inventario = Router();

Inventario.get('/', getInventarios);           // Obtener todos los inventarios
Inventario.get('/:id', getInventario);         // Obtener un inventario por ID
Inventario.delete('/:id', deleteInventario);   // Eliminar un inventario por ID
Inventario.post('/', postInventario);          // Crear un nuevo inventario
Inventario.put('/:id', updateInventario);      // Actualizar un inventario por ID

export default Inventario;
