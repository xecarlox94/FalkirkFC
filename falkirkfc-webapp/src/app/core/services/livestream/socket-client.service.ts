import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import * as io from 'socket.io-client';
import { MatchStream } from '../../models/matchStream.model';
import { Observable } from 'rxjs';
import { MatchEvent } from '../../models/matchEvent';



@Injectable({
    providedIn: "root"
})


export class SocketClientService {
    private socket;

    constructor(){
        this.socket = io(environment.baseURL)
    }
    

    
    emitMatchStream(matchStream: MatchStream){
        this.socket.emit("live-match", matchStream)
    }

    receiveMatchStream(): Observable<MatchStream> {
        return new Observable( (observer) => {
            this.socket.on("live-match-broadcast", (value: any) => {
                const matchStream: MatchStream = new MatchStream(value.match_id, value.live)
                if(value.matchEvent) {
                    const mEvent = value.matchEvent;
                    const matchEvent = new MatchEvent(mEvent.typeEvent, mEvent.minute, mEvent.match, mEvent.player, mEvent.team)
                    matchStream.setMatchEvent(matchEvent)
                }
                if(!matchStream) observer.error("NO MATCH EVENT")
                observer.next(matchStream)
            })
        })
    }
    

}