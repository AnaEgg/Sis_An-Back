import { Request, Response } from 'express';
import Inventarios from '../models/inventarios'; 

// Obtener todos los inventarios
export const getInventarios = async (req: Request, res: Response) => {
    const listaInventarios = await Inventarios.findAll();
    res.json(listaInventarios);
};

// Obtener un inventario por su ID
export const getInventario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const inventario = await Inventarios.findByPk(id);

    if (inventario) {
        res.json(inventario);
    } else {
        res.status(404).json({
            msg: `No existe un inventario con el ID ${id}`
        });
    }
};

// Eliminar un inventario por su ID
export const deleteInventario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const inventario = await Inventarios.findByPk(id);

    if (!inventario) {
        res.status(404).json({
            msg: `No existe un inventario con el ID ${id}`
        });
    } else {
        await inventario.destroy();
        res.json({
            msg: 'El inventario fue eliminado con éxito'
        });
    }
};

// Crear un nuevo inventario
export const postInventario = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const inventario = await Inventarios.create(body);
        const id = inventario.get('id');

        res.json({
            msg: 'El inventario fue agregado con éxito',
            id: id
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
};

// Actualizar un inventario por su ID
export const updateInventario = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const inventario = await Inventarios.findByPk(id);

        if (inventario) {
            await inventario.update(body);
            res.json({
                msg: 'El inventario fue actualizado con éxito'
            });
        } else {
            res.status(404).json({
                msg: `No existe un inventario con el ID ${id}`
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
};
