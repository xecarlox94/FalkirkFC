import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import * as io from 'socket.io-client';



@Injectable({
    providedIn: "root"
})


export class SocketClientService {
    private socket;

    constructor(){
        this.socket = io(environment.baseURL)
    }
}