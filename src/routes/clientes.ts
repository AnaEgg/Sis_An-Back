import { Router } from 'express';
import { deleteCliente, getCliente, getClientes, postCliente, updateCliente } from '../controllers/clientes';

const Clientes = Router();

Clientes.get('/', getClientes);         // Obtener todos los clientes
Clientes.get('/:id', getCliente);       // Obtener un cliente por ID
Clientes.delete('/:id', deleteCliente); // Eliminar un cliente por ID
Clientes.post('/', postCliente);        // Crear un nuevo cliente
Clientes.put('/:id', updateCliente);    // Actualizar un cliente por ID

export default Clientes;
