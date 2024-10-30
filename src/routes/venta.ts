import { Router } from 'express';
import { deleteVenta, getVenta, getVentas, postVenta, updateVenta } from '../controllers/venta';

const Venta = Router();

Venta.get('/', getVentas);         // Obtener todas las ventas
Venta.get('/:id', getVenta);       // Obtener una venta por ID
Venta.delete('/:id', deleteVenta); // Eliminar una venta por ID
Venta.post('/', postVenta);        // Crear una nueva venta
Venta.put('/:id', updateVenta);    // Actualizar una venta por ID

export default Venta;
