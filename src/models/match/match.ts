import { Typegoose, prop, Ref, arrayProp } from "typegoose";
import Team from "models/squad/team";


class MatchEvent extends Typegoose {
    
}


class Match extends Typegoose {
    
    @prop({ ref: Team, required: true })
    home: Ref<Team>;

    @prop({ ref: Team, required: true })
    away: Ref<Team>;

    @arrayProp({ itemsRef: MatchEvent })
    event: Ref<MatchEvent>;
    
    @prop({ required: true, min: 0, default: 0 })
    homeScore: number;

    @prop({ required: true, min: 0, default: 0 })
    awayScore: number;
    
    @prop({ required: true })
    time: Date;
}



export { Match, MatchEvent };