import { Injectable, OnDestroy } from "@angular/core";
import { SocketClientService } from './socket-client.service';
import { MatchStream } from '../../models/matchStream.model';
import { Subject } from 'rxjs';




@Injectable({
    providedIn: "root"
})


export class LiveMatchService {
    private socketClientService: SocketClientService;
    liveMatchSubject: Subject<MatchStream> = new Subject<MatchStream>()

    constructor(socketClientSrv: SocketClientService){
        this.socketClientService = socketClientSrv;
        this.socketClientService.receiveMatchStream()
            .subscribe(
                (matchStream: MatchStream) => {
                    this.liveMatchSubject.next(matchStream)
                }, (error: any) => {
                    this.liveMatchSubject.error(error)
                })
    }
    

}
