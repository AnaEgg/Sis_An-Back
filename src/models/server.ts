import express, { Application, Request, Response } from 'express';
import db from '../db/connection';
import cors from 'cors';


import Producto from '../routes/productos';
import Venta from '../routes/venta';
import Clientes from '../routes/clientes';
import Usuarios from '../routes/usuarios';
import Inventario from '../routes/inventarios';
import detalle_Venta from '../routes/detalle_Venta';
import Rol from '../routes/rol';


class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto http://localhost:${this.port}`)
        })
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                mensaje: 'Bienvenido a la API',
                version: '1.0.0',
                fecha: new Date().toISOString(),
                puerto: this.port

            })
        })

  
        this.app.use('/api/v1/productos', Producto);
        this.app.use('/api/v1/venta', Venta );
        this.app.use('/api/v1/clientes' , Clientes);
        this.app.use('/api/v1/usuario' , Usuarios);
        this.app.use('/api/v1/inventario' , Inventario);
        this.app.use('/api/v1/detalle_Venta' , detalle_Venta);
        this.app.use('/api/v1/rol', Rol);



    }
    midlewares() {

        // Parseamos el body
        this.app.use(express.json());
        // Cors
        this.app.use(cors());
    }

    async dbConnect() {

        try {
            await db.authenticate();
            console.log('Database iniciada')
        } catch (error) {
            console.log(error);
            console.log('Error al conectarse a la base de datos')
        }
    }

}

export default Server;