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
exports.updateUsuario = exports.postUsuario = exports.deleteUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const usuarios_1 = __importDefault(require("../models/usuarios"));
// Obtener todos los usuarios
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listaUsuarios = yield usuarios_1.default.findAll();
    res.json(listaUsuarios);
});
exports.getUsuarios = getUsuarios;
// Obtener un usuario por su ID
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuarios_1.default.findByPk(id);
    if (usuario) {
        res.json(usuario);
    }
    else {
        res.status(404).json({
            msg: `No existe un usuario con el ID ${id}`
        });
    }
});
exports.getUsuario = getUsuario;
// Eliminar un usuario por su ID
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuarios_1.default.findByPk(id);
    if (!usuario) {
        res.status(404).json({
            msg: `No existe un usuario con el ID ${id}`
        });
    }
    else {
        yield usuario.destroy();
        res.json({
            msg: 'El usuario fue eliminado con éxito'
        });
    }
});
exports.deleteUsuario = deleteUsuario;
// Crear un nuevo usuario
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const usuario = yield usuarios_1.default.create(body);
        const id = usuario.get('id');
        res.json({
            msg: 'El usuario fue agregado con éxito',
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
exports.postUsuario = postUsuario;
// Actualizar un usuario por su ID
const updateUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const usuario = yield usuarios_1.default.findByPk(id);
        if (usuario) {
            yield usuario.update(body);
            res.json({
                msg: 'El usuario fue actualizado con éxito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un usuario con el ID ${id}`
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
exports.updateUsuario = updateUsuario;
