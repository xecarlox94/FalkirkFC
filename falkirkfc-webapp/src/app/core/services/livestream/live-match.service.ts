import { Injectable } from "@angular/core";
import { SocketClientService } from './socket-client.service';
import { MatchStream } from '../../models/matchStream.model';
import { Subject } from 'rxjs';




@Injectable({
    providedIn: "root"
})


export class LiveMatchService {
    private socketClientService: SocketClientService;
    streamSubject: Subject<MatchStream> = new Subject<MatchStream>();
    statusSubject: Subject<{live: boolean, matchStatus: string, _id: string}> = new Subject<{live: boolean, matchStatus: string, _id: string}>();

    constructor(socketClientSrv: SocketClientService){
        this.socketClientService = socketClientSrv;
        this.subscribeToMatchStream()
    }

    subscribeToMatchStream(){
        this.socketClientService.receiveMatchStream()
            .subscribe(
                (matchStream: MatchStream) => {
                    let live: boolean = true;
                    let matchStatus: string = "ongoing"
                    const _id = matchStream.match_id;

                    if( !matchStream.live ) {
                        live = false;
                        matchStatus = "finished"
                    } else if ( !matchStream.mEventDeleted && !matchStream.matchEvent) matchStatus = "started"
                    this.streamSubject.next(matchStream)
                    this.statusSubject.next({ live, matchStatus, _id })
                }, (error: any) => {
                    this.streamSubject.error(error)
                    this.statusSubject.error(error)
                })
    }
    

}
