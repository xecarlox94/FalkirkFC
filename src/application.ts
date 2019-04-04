import * as express from "express";

import { json, Application, Request, Response } from "express";


export default class ServerApplication {

    private static _app: Application;
    private static _port: number;

    private static setupServer():void {
        this._app = express();
        
        this._port = Number(process.env.PORT);

        this.initDatabase();
        this.initMiddleware();
        this.initControllers();

        
        this._app.get("/", (req: Request, res: Response) =>  {} ) // delete routeeeeeeeeeeeeee


    }
    static initDatabase(): void {
        // throw new Error("Method not implemented."); Implemeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeent
    }
    static initControllers(): void {
        // throw new Error("Method not implemented."); Implemeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeent
    }

    public static getServer(): Application {
        this.setupServer();
        return this._app;
    }
    
    private static initMiddleware():void {
        this._app.use( json() );
    }

    public static start():void {
        this.setupServer();
        this._app.set('port', this._port);
        this._app.listen(this._port);
    }
    
}
