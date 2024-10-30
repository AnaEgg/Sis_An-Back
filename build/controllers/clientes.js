"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCliente = exports.postCliente = exports.deleteCliente = exports.getCliente = exports.getClientes = void 0;
const clientes_1 = __importDefault(require("../models/clientes"));
// Obtener todos los clientes
const getClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listaClientes = yield clientes_1.default.findAll();
        res.json(listaClientes);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al obtener los clientes'
        });
    }
});
exports.getClientes = getClientes;
// Obtener un cliente por su ID
const getCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const cliente = yield clientes_1.default.findByPk(id);
        if (cliente) {
            res.json(cliente);
        }
        else {
            res.status(404).json({
                msg: `No existe un cliente con el ID ${id}`
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al obtener el cliente'
        });
    }
});
exports.getCliente = getCliente;
// Eliminar un cliente por su ID
const deleteCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const cliente = yield clientes_1.default.findByPk(id);
        if (cliente) {
            yield cliente.destroy();
            res.json({
                msg: 'El cliente fue eliminado con éxito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un cliente con el ID ${id}`
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al eliminar el cliente'
        });
    }
});
exports.deleteCliente = deleteCliente;
// Crear un nuevo cliente
const postCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const cliente = yield clientes_1.default.create(body);
        const id = cliente.get('id');
        res.status(201).json({
            msg: 'El cliente fue agregado con éxito',
            cliente: {
                id,
            }
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al crear el cliente'
        });
    }
});
exports.postCliente = postCliente;
// Actualizar un cliente por su ID
const updateCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const cliente = yield clientes_1.default.findByPk(id);
        if (cliente) {
            yield cliente.update(body);
            res.json({
                msg: 'El cliente fue actualizado con éxito',
                cliente
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un cliente con el ID ${id}`
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al actualizar el cliente'
        });
    }
});
exports.updateCliente = updateCliente;
