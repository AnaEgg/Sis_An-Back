import { Router } from 'express';
import { deleteRol, getRol, getRoles, postRol, updateRol } from '../controllers/rol';

const Rol = Router();

Rol.get('/', getRoles);         // Obtener todos los roles
Rol.get('/:id', getRol);        // Obtener un rol por ID
Rol.delete('/:id', deleteRol);  // Eliminar un rol por ID
Rol.post('/', postRol);         // Crear un nuevo rol
Rol.put('/:id', updateRol);     // Actualizar un rol por ID

export default Rol;
