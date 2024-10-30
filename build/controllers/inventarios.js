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
exports.updateInventario = exports.postInventario = exports.deleteInventario = exports.getInventario = exports.getInventarios = void 0;
const inventarios_1 = __importDefault(require("../models/inventarios"));
// Obtener todos los inventarios
const getInventarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listaInventarios = yield inventarios_1.default.findAll();
    res.json(listaInventarios);
});
exports.getInventarios = getInventarios;
// Obtener un inventario por su ID
const getInventario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const inventario = yield inventarios_1.default.findByPk(id);
    if (inventario) {
        res.json(inventario);
    }
    else {
        res.status(404).json({
            msg: `No existe un inventario con el ID ${id}`
        });
    }
});
exports.getInventario = getInventario;
// Eliminar un inventario por su ID
const deleteInventario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const inventario = yield inventarios_1.default.findByPk(id);
    if (!inventario) {
        res.status(404).json({
            msg: `No existe un inventario con el ID ${id}`
        });
    }
    else {
        yield inventario.destroy();
        res.json({
            msg: 'El inventario fue eliminado con éxito'
        });
    }
});
exports.deleteInventario = deleteInventario;
// Crear un nuevo inventario
const postInventario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const inventario = yield inventarios_1.default.create(body);
        const id = inventario.get('id');
        res.json({
            msg: 'El inventario fue agregado con éxito',
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
exports.postInventario = postInventario;
// Actualizar un inventario por su ID
const updateInventario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const inventario = yield inventarios_1.default.findByPk(id);
        if (inventario) {
            yield inventario.update(body);
            res.json({
                msg: 'El inventario fue actualizado con éxito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un inventario con el ID ${id}`
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
exports.updateInventario = updateInventario;
