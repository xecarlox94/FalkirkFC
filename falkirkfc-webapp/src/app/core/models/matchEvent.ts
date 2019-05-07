import { Match } from './match.model';
import { Team } from './team.model';
import { Player } from './player.model';


export class MatchEvent {
    typeEvent: string;
    minute: number;
    match: string;
    team: Team | string;
    player: Player | string;
    _id?: string;

    constructor(typeEvent: string, minute: number, match: string, player: Player = null, team: Team = null, id: string = null){
        this.typeEvent = typeEvent;
        this.minute = minute;
        this.match = match;
        this._id = id;
        this.team = team;
        this.player = player;
    }
    
    setTeam(teamID: string){
        this.team = teamID;
    }

    setPlayer(playerID: string){
        this.player = playerID;
    }

    setID(id: string){
        this._id = id;
    }

}