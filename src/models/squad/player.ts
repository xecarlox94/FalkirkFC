import { Typegoose, prop } from "typegoose";



export default class Player extends Typegoose {

    @prop({ required: true, unique: true })
    name: string;
    
}