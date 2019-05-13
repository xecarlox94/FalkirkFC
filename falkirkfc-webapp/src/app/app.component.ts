import { Component } from '@angular/core';
import { SocketClientService } from './core/services/socket-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  socketClientService: SocketClientService

  constructor(socketClientSrv: SocketClientService){
    this.socketClientService = socketClientSrv;
  }

}
