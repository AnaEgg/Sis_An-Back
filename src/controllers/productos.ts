import { Request, Response } from 'express';
import Productos from '../models/productos';

// Obtener todos los productos
export const getProductos = async (req: Request, res: Response) => {
    const listaProductos = await Productos.findAll();
    res.json(listaProductos);
};

// Obtener un producto por su ID
export const getProducto = async (req: Request, res: Response) => {
    const { id } = req.params;
    const producto = await Productos.findByPk(id);

    if (producto) {
        res.json(producto);
    } else {
        res.status(404).json({
            msg: `No existe un producto con el ID ${id}`
        });
    }
};

// Eliminar un producto por su ID
export const deleteProducto = async (req: Request, res: Response) => {
    const { id } = req.params;
    const producto = await Productos.findByPk(id);

    if (!producto) {
        res.status(404).json({
            msg: `No existe un producto con el ID ${id}`
        });
    } else {
        await producto.destroy();
        res.json({
            msg: 'El producto fue eliminado con éxito'
        });
    }
};

// Crear un nuevo producto
export const postProducto = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const producto = await Productos.create(body);
        const id = producto.get('id');

        res.json({
            msg: 'El producto fue agregado con éxito',
            id: id
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
};

// Actualizar un producto por su ID
export const updateProducto = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const producto = await Productos.findByPk(id);

        if (producto) {
            await producto.update(body);
            res.json({
                msg: 'El producto fue actualizado con éxito'
            });
        } else {
            res.status(404).json({
                msg: `No existe un producto con el ID ${id}`
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
};
