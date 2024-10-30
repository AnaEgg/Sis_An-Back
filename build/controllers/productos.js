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
exports.updateProducto = exports.postProducto = exports.deleteProducto = exports.getProducto = exports.getProductos = void 0;
const productos_1 = __importDefault(require("../models/productos"));
// Obtener todos los productos
const getProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listaProductos = yield productos_1.default.findAll();
    res.json(listaProductos);
});
exports.getProductos = getProductos;
// Obtener un producto por su ID
const getProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const producto = yield productos_1.default.findByPk(id);
    if (producto) {
        res.json(producto);
    }
    else {
        res.status(404).json({
            msg: `No existe un producto con el ID ${id}`
        });
    }
});
exports.getProducto = getProducto;
// Eliminar un producto por su ID
const deleteProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const producto = yield productos_1.default.findByPk(id);
    if (!producto) {
        res.status(404).json({
            msg: `No existe un producto con el ID ${id}`
        });
    }
    else {
        yield producto.destroy();
        res.json({
            msg: 'El producto fue eliminado con éxito'
        });
    }
});
exports.deleteProducto = deleteProducto;
// Crear un nuevo producto
const postProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const producto = yield productos_1.default.create(body);
        const id = producto.get('id');
        res.json({
            msg: 'El producto fue agregado con éxito',
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
exports.postProducto = postProducto;
// Actualizar un producto por su ID
const updateProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const producto = yield productos_1.default.findByPk(id);
        if (producto) {
            yield producto.update(body);
            res.json({
                msg: 'El producto fue actualizado con éxito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un producto con el ID ${id}`
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
exports.updateProducto = updateProducto;
