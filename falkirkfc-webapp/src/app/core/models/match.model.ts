import { MatchEvent } from './matchEvent';
import { Team } from './team.model';



export class Match {
    home: Team | string;
    away: Team | string;
    round: number;
    time: string;
    events?: MatchEvent[];
    homeScore?: number;
    awayScore?: number;
    _id?: string;

    constructor(home: Team | string, away: Team | string, round: number, time: string, id: string = null){
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

    setEvents(events: MatchEvent[]): void {
        this.events = events;
    }

    getEvents(): MatchEvent[] {
        return this.events.slice()
    }

    setHome(home: Team){
        this.home = home;
    }

    setAway(away: Team){
        this.away = away;
    }

}