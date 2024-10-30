import { Request, Response } from 'express';
import Rol from '../models/rol';

// Obtener todos los roles
export const getRoles = async (req: Request, res: Response) => {
    const listaRoles = await Rol.findAll();
    res.json(listaRoles);
};

// Obtener un rol por su ID
export const getRol = async (req: Request, res: Response) => {
    const { id } = req.params;
    const rol = await Rol.findByPk(id);

    if (rol) {
        res.json(rol);
    } else {
        res.status(404).json({
            msg: `No existe un rol con el ID ${id}`
        });
    }
};

// Eliminar un rol por su ID
export const deleteRol = async (req: Request, res: Response) => {
    const { id } = req.params;
    const rol = await Rol.findByPk(id);

    if (!rol) {
        res.status(404).json({
            msg: `No existe un rol con el ID ${id}`
        });
    } else {
        await rol.destroy();
        res.json({
            msg: 'El rol fue eliminado con éxito'
        });
    }
};

// Crear un nuevo rol
export const postRol = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const rol = await Rol.create(body);
        const id = rol.get('id');

        res.json({
            msg: 'El rol fue agregado con éxito',
            id: id
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
};

// Actualizar un rol por su ID
export const updateRol = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const rol = await Rol.findByPk(id);

        if (rol) {
            await rol.update(body);
            res.json({
                msg: 'El rol fue actualizado con éxito'
            });
        } else {
            res.status(404).json({
                msg: `No existe un rol con el ID ${id}`
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
};
