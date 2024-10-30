import { Router } from 'express';
import { deleteDetalleVenta, getDetalleVenta, getDetallesVenta, postDetalleVenta, updateDetalleVenta } from '../controllers/detalle_Venta';

const DetalleVenta = Router();

DetalleVenta.get('/', getDetallesVenta);         // Obtener todos los detalles de venta
DetalleVenta.get('/:id', getDetalleVenta);       // Obtener un detalle de venta por ID
DetalleVenta.delete('/:id', deleteDetalleVenta); // Eliminar un detalle de venta por ID
DetalleVenta.post('/', postDetalleVenta);        // Crear un nuevo detalle de venta
DetalleVenta.put('/:id', updateDetalleVenta);    // Actualizar un detalle de venta por ID

export default DetalleVenta;
