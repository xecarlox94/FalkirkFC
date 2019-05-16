import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import * as io from 'socket.io-client';
import { MatchStream } from '../../models/matchStream.model';
import { Observable } from 'rxjs';



@Injectable({
    providedIn: "root"
})


export class SocketClientService {
    private socket;

    constructor(){
        this.socket = io(environment.baseURL)
    }

    emitMatchStream(match_id: string, live: boolean){
        console.log("emitting match event")
        const matchEvent: MatchStream = new MatchStream(match_id, live)
        this.socket.emit("live-match", matchEvent)
    }

    receiveMatchStream(): Observable<MatchStream>{
        return new Observable( (observer) => {
            this.socket.on("live-match-broadcast", (value: any) => {
                const matchEvent: MatchStream = new MatchStream(value.match_id, value.live)
                if(!matchEvent) observer.error("NO MATCH EVENT")
                //if(!matchEvent.live) observer.complete()
                observer.next(matchEvent)
            })
        })
    }
    

}