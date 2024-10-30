import { Request, Response } from 'express';
import DetalleVenta from '../models/detalle_Venta';

// Obtener todos los detalles de venta
export const getDetallesVenta = async (req: Request, res: Response) => {
    try {
        const listaDetallesVenta = await DetalleVenta.findAll();
        res.json(listaDetallesVenta);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
};

// Obtener un detalle de venta por su ID
export const getDetalleVenta = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const detalleVenta = await DetalleVenta.findByPk(id);

        if (detalleVenta) {
            res.json(detalleVenta);
        } else {
            res.status(404).json({
                msg: `No existe un detalle de venta con el ID ${id}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
};

// Eliminar un detalle de venta por su ID
export const deleteDetalleVenta = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const detalleVenta = await DetalleVenta.findByPk(id);

        if (!detalleVenta) {
            res.status(404).json({
                msg: `No existe un detalle de venta con el ID ${id}`
            });
        } else {
            await detalleVenta.destroy();
            res.json({
                msg: 'El detalle de venta fue eliminado con éxito'
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
};

// Crear un nuevo detalle de venta
export const postDetalleVenta = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const detalleVenta = await DetalleVenta.create(body);
        const id = detalleVenta.get('id');

        res.json({
            msg: 'El detalle de venta fue agregado con éxito',
            id: id
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
};

// Actualizar un detalle de venta por su ID
export const updateDetalleVenta = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const detalleVenta = await DetalleVenta.findByPk(id);

        if (detalleVenta) {
            await detalleVenta.update(body);
            res.json({
                msg: 'El detalle de venta fue actualizado con éxito'
            });
        } else {
            res.status(404).json({
                msg: `No existe un detalle de venta con el ID ${id}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
};
