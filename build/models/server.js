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
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("../db/connection"));
const cors_1 = __importDefault(require("cors"));
const productos_1 = __importDefault(require("../routes/productos"));
const venta_1 = __importDefault(require("../routes/venta"));
const clientes_1 = __importDefault(require("../routes/clientes"));
const usuarios_1 = __importDefault(require("../routes/usuarios"));
const inventarios_1 = __importDefault(require("../routes/inventarios"));
const detalle_Venta_1 = __importDefault(require("../routes/detalle_Venta"));
const rol_1 = __importDefault(require("../routes/rol"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto http://localhost:${this.port}`);
        });
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                mensaje: 'Bienvenido a la API',
                version: '1.0.0',
                fecha: new Date().toISOString(),
                puerto: this.port
            });
        });
        this.app.use('/api/v1/productos', productos_1.default);
        this.app.use('/api/v1/venta', venta_1.default);
        this.app.use('/api/v1/clientes', clientes_1.default);
        this.app.use('/api/v1/usuario', usuarios_1.default);
        this.app.use('/api/v1/inventario', inventarios_1.default);
        this.app.use('/api/v1/detalle_Venta', detalle_Venta_1.default);
        this.app.use('/api/v1/rol', rol_1.default);
    }
    midlewares() {
        // Parseamos el body
        this.app.use(express_1.default.json());
        // Cors
        this.app.use((0, cors_1.default)());
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Database iniciada');
            }
            catch (error) {
                console.log(error);
                console.log('Error al conectarse a la base de datos');
            }
        });
    }
}
exports.default = Server;
