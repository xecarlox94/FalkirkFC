import * as Mongoose from "mongoose";
import { MongoClient } from "mongodb";


export default class Database {
    private static _mongoURI: string;
    private static _mongoose: typeof Mongoose;



    private static config(){
        this._mongoURI = process.env.MONGODB_URI;
    }

    public static init(){
        this.config();
        this._mongoose = Mongoose;
        this._mongoose.connect(this._mongoURI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
    }


}
