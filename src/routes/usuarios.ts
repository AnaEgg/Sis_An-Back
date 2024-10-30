import { Router } from 'express';
import { deleteUsuario, getUsuario, getUsuarios, postUsuario, updateUsuario } from '../controllers/usuarios';

const Usuario = Router();

Usuario.get('/', getUsuarios);         // Obtener todos los usuarios
Usuario.get('/:id', getUsuario);       // Obtener un usuario por ID
Usuario.delete('/:id', deleteUsuario); // Eliminar un usuario por ID
Usuario.post('/', postUsuario);        // Crear un nuevo usuario
Usuario.put('/:id', updateUsuario);    // Actualizar un usuario por ID

export default Usuario;
