import { Typegoose, prop, Ref } from "typegoose";
import Player from "./player";


export default class Team extends Typegoose {


    @prop({ required: true, unique: true })
    name: string;
    
    @prop({ ref: Player })
    player: Ref<Player>;
    
    

}