import { Match } from './match.model';
import { Team } from './team.model';
import { Player } from './player.model';


export class MatchEvent {
    type: string;
    minute: number;
    match: Match | string;
    player: Player | string;
    _id?: string;
    team?: Team | string;

    constructor(type: string, minute: number, match: Match | string, player: Player | string, id: string = null){
        this.type = type;
        this.minute = minute;
        this.match = match;
        this._id = id;
        this.player = player;
    }
    
    setTeam( team: Team | string ): void {
        this.team = team;
    }

    getTeam(): Team | string {
        return this.team;
    }

}