import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketClientService } from './core/services/livestream/socket-client.service';
import { Observable, Subscription } from 'rxjs';
import { MatchStream } from './core/models/matchStream.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor( ){ }
  
  ngOnInit() { }

}
