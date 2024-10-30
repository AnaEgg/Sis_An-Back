import { Request, Response } from 'express';
import Clientes from '../models/clientes';

// Obtener todos los clientes
export const getClientes = async (req: Request, res: Response) => {
    try {
        const listaClientes = await Clientes.findAll();
        res.json(listaClientes);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al obtener los clientes'
        });
    }
};

// Obtener un cliente por su ID
export const getCliente = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const cliente = await Clientes.findByPk(id);

        if (cliente) {
            res.json(cliente);
        } else {
            res.status(404).json({
                msg: `No existe un cliente con el ID ${id}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al obtener el cliente'
        });
    }
};

// Eliminar un cliente por su ID
export const deleteCliente = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const cliente = await Clientes.findByPk(id);

        if (cliente) {
            await cliente.destroy();
            res.json({
                msg: 'El cliente fue eliminado con éxito'
            });
        } else {
            res.status(404).json({
                msg: `No existe un cliente con el ID ${id}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al eliminar el cliente'
        });
    }
};

// Crear un nuevo cliente
export const postCliente = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const cliente = await Clientes.create(body);
        const id = cliente.get('id');

        res.status(201).json({
            msg: 'El cliente fue agregado con éxito',
            cliente: {
                id,
    


            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al crear el cliente'
        });
    }
};

// Actualizar un cliente por su ID
export const updateCliente = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const cliente = await Clientes.findByPk(id);

        if (cliente) {
            await cliente.update(body);
            res.json({
                msg: 'El cliente fue actualizado con éxito',
                cliente
            });
        } else {
            res.status(404).json({
                msg: `No existe un cliente con el ID ${id}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al actualizar el cliente'
        });
    }
};
