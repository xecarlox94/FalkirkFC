"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
class Database {
    static config() {
        this._mongoURI = process.env.MONGODB_URI;
    }
    static init() {
        this.config();
        this._mongoose = Mongoose;
        this._mongoose.connect(this._mongoURI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
    }
}
exports.default = Database;
//# sourceMappingURL=database.js.map