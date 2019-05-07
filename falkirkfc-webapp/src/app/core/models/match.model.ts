import { MatchEvent } from './matchEvent';
import { Team } from './team.model';



export class Match {
    home: Team;
    away: Team;
    round: number;
    time: string;
    homeScore?: number;
    awayScore?: number;
    _id?: string;

    constructor(home: Team, away: Team, round: number, time: string = null, id: string = null){
        this.home = home;
        this.away = away;
        this.round = round;
        this.time = time;
        this._id = id;
    }
    
    setID(id: string){
        this._id = id;
    }

    setResult(home: number, away: number){
        this.homeScore = home;
        this.awayScore = away;
    }

    setHome(home: Team){
        this.home = home;
    }

    setAway(away: Team){
        this.away = away;
    }

    getHome() { return this.home }

    getAway() { return this.away }

}