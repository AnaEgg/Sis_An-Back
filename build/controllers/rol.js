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
exports.updateRol = exports.postRol = exports.deleteRol = exports.getRol = exports.getRoles = void 0;
const rol_1 = __importDefault(require("../models/rol"));
// Obtener todos los roles
const getRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listaRoles = yield rol_1.default.findAll();
    res.json(listaRoles);
});
exports.getRoles = getRoles;
// Obtener un rol por su ID
const getRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const rol = yield rol_1.default.findByPk(id);
    if (rol) {
        res.json(rol);
    }
    else {
        res.status(404).json({
            msg: `No existe un rol con el ID ${id}`
        });
    }
});
exports.getRol = getRol;
// Eliminar un rol por su ID
const deleteRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const rol = yield rol_1.default.findByPk(id);
    if (!rol) {
        res.status(404).json({
            msg: `No existe un rol con el ID ${id}`
        });
    }
    else {
        yield rol.destroy();
        res.json({
            msg: 'El rol fue eliminado con éxito'
        });
    }
});
exports.deleteRol = deleteRol;
// Crear un nuevo rol
const postRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const rol = yield rol_1.default.create(body);
        const id = rol.get('id');
        res.json({
            msg: 'El rol fue agregado con éxito',
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
exports.postRol = postRol;
// Actualizar un rol por su ID
const updateRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const rol = yield rol_1.default.findByPk(id);
        if (rol) {
            yield rol.update(body);
            res.json({
                msg: 'El rol fue actualizado con éxito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un rol con el ID ${id}`
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
exports.updateRol = updateRol;
