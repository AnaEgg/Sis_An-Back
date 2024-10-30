import { Request, Response } from 'express';
import Usuarios from '../models/usuarios';

// Obtener todos los usuarios
export const getUsuarios = async (req: Request, res: Response) => {
    const listaUsuarios = await Usuarios.findAll();
    res.json(listaUsuarios);
};

// Obtener un usuario por su ID
export const getUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const usuario = await Usuarios.findByPk(id);

    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({
            msg: `No existe un usuario con el ID ${id}`
        });
    }
};

// Eliminar un usuario por su ID
export const deleteUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const usuario = await Usuarios.findByPk(id);

    if (!usuario) {
        res.status(404).json({
            msg: `No existe un usuario con el ID ${id}`
        });
    } else {
        await usuario.destroy();
        res.json({
            msg: 'El usuario fue eliminado con éxito'
        });
    }
};

// Crear un nuevo usuario
export const postUsuario = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const usuario = await Usuarios.create(body);
        const id = usuario.get('id');

        res.json({
            msg: 'El usuario fue agregado con éxito',
            id: id
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
};

// Actualizar un usuario por su ID
export const updateUsuario = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const usuario = await Usuarios.findByPk(id);

        if (usuario) {
            await usuario.update(body);
            res.json({
                msg: 'El usuario fue actualizado con éxito'
            });
        } else {
            res.status(404).json({
                msg: `No existe un usuario con el ID ${id}`
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
};
