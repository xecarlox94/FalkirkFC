import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketClientService } from './core/services/livestream/socket-client.service';
import { Observable, Subscription } from 'rxjs';
import { MatchStream } from './core/models/matchStream.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  socketClientService: SocketClientService
  subscription: Subscription;

  constructor(socketClientSrv: SocketClientService){
    this.socketClientService = socketClientSrv;
  }
  
  ngOnInit(): void {
    this.subscription = this.socketClientService.receiveMatchStream()
        .subscribe( (matchStream: MatchStream) => {
          console.log(matchStream)
        },
        (error) => console.error("ERRRROORRRRR!!!!!!!!!!!!!!!!!!!!!!!! " + error),
        () => console.log("COMPLETED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!") )
  }

  
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
