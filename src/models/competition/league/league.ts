import { Competition, Tournament, Round } from "../competition";
import { Ref, arrayProp } from "typegoose";
import Team from "models/squad/team";





export default class League extends Competition implements Tournament {

    @arrayProp({
        itemsRef: Round
    })
    rounds: Ref<Round>;

}