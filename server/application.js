"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const express_1 = require("express");
class ServerApplication {
    static setupServer() {
        this._app = express();
        this._port = Number(process.env.PORT);
        this.initDatabase();
        this.initMiddleware();
        this.initControllers();
        this._app.get("/", (req, res) => { });
    }
    static initDatabase() {
    }
    static initControllers() {
    }
    static getServer() {
        this.setupServer();
        return this._app;
    }
    static initMiddleware() {
        this._app.use(express_1.json());
    }
    static start() {
        this.setupServer();
        this._app.set('port', this._port);
        this._app.listen(this._port);
    }
}
exports.default = ServerApplication;
//# sourceMappingURL=application.js.map