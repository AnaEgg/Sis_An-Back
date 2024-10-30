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
exports.updateVenta = exports.postVenta = exports.deleteVenta = exports.getVenta = exports.getVentas = void 0;
const venta_1 = __importDefault(require("../models/venta"));
// Obtener todas las ventas
const getVentas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listaVentas = yield venta_1.default.findAll();
    res.json(listaVentas);
});
exports.getVentas = getVentas;
// Obtener una venta por su ID
const getVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const venta = yield venta_1.default.findByPk(id);
    if (venta) {
        res.json(venta);
    }
    else {
        res.status(404).json({
            msg: `No existe una venta con el ID ${id}`
        });
    }
});
exports.getVenta = getVenta;
// Eliminar una venta por su ID
const deleteVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const venta = yield venta_1.default.findByPk(id);
    if (!venta) {
        res.status(404).json({
            msg: `No existe una venta con el ID ${id}`
        });
    }
    else {
        yield venta.destroy();
        res.json({
            msg: 'La venta fue eliminada con éxito'
        });
    }
});
exports.deleteVenta = deleteVenta;
// Crear una nueva venta
const postVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const venta = yield venta_1.default.create(body);
        const id = venta.get('id');
        res.json({
            msg: 'La venta fue agregada con éxito',
            id: id
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
});
exports.postVenta = postVenta;
// Actualizar una venta por su ID
const updateVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const venta = yield venta_1.default.findByPk(id);
        if (venta) {
            yield venta.update(body);
            res.json({
                msg: 'La venta fue actualizada con éxito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe una venta con el ID ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
});
exports.updateVenta = updateVenta;
