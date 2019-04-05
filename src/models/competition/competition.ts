import { Typegoose, Ref, arrayProp, prop } from "typegoose";
import Team from "models/squad/team";
import { Match } from "models/match/match";

interface Tournament {
    rounds: Ref<Round>;
    
}

class Round extends Typegoose {

    @prop()
    number: number;

    @arrayProp({ itemsRef: Match })
    matches: Ref<Match>;

}


abstract class Competition extends Typegoose {

    @arrayProp({ itemsRef: Team })
    teams: Ref<Team>;
    
    @prop({ ref: Team })
    winner: Ref<Team>;

}


export { Competition, Round, Tournament };