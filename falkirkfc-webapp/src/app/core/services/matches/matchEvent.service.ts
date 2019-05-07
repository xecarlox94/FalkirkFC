import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { MatchEvent } from '../../models/matchEvent';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Player } from '../../models/player.model';
import { Team } from '../../models/team.model';



@Injectable({ providedIn: "root" })

export class MatchEventService {
    http: HttpClient;

    constructor(http: HttpClient){
        this.http = http;
    }
    
    fetchMatchEvents(matchID: string){
        return this.http.get<MatchEvent[]>(`${ environment.baseURL }/matchEvents/match/${ matchID }`).pipe(
            map( (values: any) =>{
                let matchEvents: MatchEvent[] = [];
                for(let i = 0; i < values.length; i++){
                    const player = new Player(values[i].player.name, values[i].player.position, values[i].player.team, values[i].player._id)
                    const team = new Team(values[i].team.name, values[i].team.manager, values[i].team._id)
                    matchEvents[i] = new MatchEvent(values[i].typeEvent, values[i].minute, values[i].match, player, team, values[i]._id)
                }
                return matchEvents
            })
        ).toPromise()
    }

    deleteMatchEvent(matchEvent: MatchEvent){
        return this.http.delete<MatchEvent>(`${ environment.baseURL }/matchEvents/${ matchEvent._id }`).pipe(
            map( (value: any) => {
                const mEvent = value.matchEvent;
                const player = new Player(mEvent.player.name, mEvent.player.position, mEvent.player.team, mEvent.player._id);
                const team = new Team(mEvent.team.name, mEvent.team.manager, mEvent.team._id);
                return new MatchEvent(mEvent.typeEvent, mEvent.minute, mEvent.match, player, team, mEvent._id);
            })
        ).toPromise()
    }


    createMatchEvent(matchEvent: MatchEvent){
        return this.http.post<MatchEvent>(`${ environment.baseURL }/matchEvents/`, matchEvent).pipe(
            map( (value: any) => {
                const matchEventJSON = value.matchEvent;
                const matchEvent = new MatchEvent(matchEventJSON.typeEvent, matchEventJSON.minute, matchEventJSON.match)
                matchEvent.setTeam(matchEventJSON.team)
                matchEvent.setPlayer(matchEventJSON.player)
                matchEvent.setID(matchEventJSON._id)
                return matchEvent
            })
        ).toPromise()
    }

}