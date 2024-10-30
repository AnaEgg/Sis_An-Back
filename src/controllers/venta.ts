import { Request, Response } from 'express';
import Venta from '../models/venta';

// Obtener todas las ventas
export const getVentas = async (req: Request, res: Response) => {
    const listaVentas = await Venta.findAll();
    res.json(listaVentas);
};

// Obtener una venta por su ID
export const getVenta = async (req: Request, res: Response) => {
    const { id } = req.params;
    const venta = await Venta.findByPk(id);

    if (venta) {
        res.json(venta);
    } else {
        res.status(404).json({
            msg: `No existe una venta con el ID ${id}`
        });
    }
};

// Eliminar una venta por su ID
export const deleteVenta = async (req: Request, res: Response) => {
    const { id } = req.params;
    const venta = await Venta.findByPk(id);

    if (!venta) {
        res.status(404).json({
            msg: `No existe una venta con el ID ${id}`
        });
    } else {
        await venta.destroy();
        res.json({
            msg: 'La venta fue eliminada con éxito'
        });
    }
};

// Crear una nueva venta
export const postVenta = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const venta = await Venta.create(body);
        const id = venta.get('id');

        res.json({
            msg: 'La venta fue agregada con éxito',
            id: id
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
};

// Actualizar una venta por su ID
export const updateVenta = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const venta = await Venta.findByPk(id);

        if (venta) {
            await venta.update(body);
            res.json({
                msg: 'La venta fue actualizada con éxito'
            });
        } else {
            res.status(404).json({
                msg: `No existe una venta con el ID ${id}`
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
};
