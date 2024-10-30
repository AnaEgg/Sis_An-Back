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
exports.updateDetalleVenta = exports.postDetalleVenta = exports.deleteDetalleVenta = exports.getDetalleVenta = exports.getDetallesVenta = void 0;
const detalle_Venta_1 = __importDefault(require("../models/detalle_Venta"));
// Obtener todos los detalles de venta
const getDetallesVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listaDetallesVenta = yield detalle_Venta_1.default.findAll();
        res.json(listaDetallesVenta);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
});
exports.getDetallesVenta = getDetallesVenta;
// Obtener un detalle de venta por su ID
const getDetalleVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const detalleVenta = yield detalle_Venta_1.default.findByPk(id);
        if (detalleVenta) {
            res.json(detalleVenta);
        }
        else {
            res.status(404).json({
                msg: `No existe un detalle de venta con el ID ${id}`
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
});
exports.getDetalleVenta = getDetalleVenta;
// Eliminar un detalle de venta por su ID
const deleteDetalleVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const detalleVenta = yield detalle_Venta_1.default.findByPk(id);
        if (!detalleVenta) {
            res.status(404).json({
                msg: `No existe un detalle de venta con el ID ${id}`
            });
        }
        else {
            yield detalleVenta.destroy();
            res.json({
                msg: 'El detalle de venta fue eliminado con éxito'
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
});
exports.deleteDetalleVenta = deleteDetalleVenta;
// Crear un nuevo detalle de venta
const postDetalleVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const detalleVenta = yield detalle_Venta_1.default.create(body);
        const id = detalleVenta.get('id');
        res.json({
            msg: 'El detalle de venta fue agregado con éxito',
            id: id
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
});
exports.postDetalleVenta = postDetalleVenta;
// Actualizar un detalle de venta por su ID
const updateDetalleVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const detalleVenta = yield detalle_Venta_1.default.findByPk(id);
        if (detalleVenta) {
            yield detalleVenta.update(body);
            res.json({
                msg: 'El detalle de venta fue actualizado con éxito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un detalle de venta con el ID ${id}`
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
});
exports.updateDetalleVenta = updateDetalleVenta;
