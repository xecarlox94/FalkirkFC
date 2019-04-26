import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Player } from '../../models/player.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: "root"
})

export class PlayerService {
    private http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }

    getPlayer(id: string): Observable<Player> {
        return this.http.get<Player>(`${ environment.baseURL }/players/${id}`).pipe(
            map( (value: any) => new Player(value.player.name, value.player.position, value.player.team, value.player._id))
        )
    }

    createPlayer(player: Player){
        return this.http.post<Player>(`${ environment.baseURL }/players/`, player)
    }

    deletePlayer(player: Player): Observable<Player> {
        return this.http.delete<Player>(`${ environment.baseURL }/players/${ player._id }`).pipe(
            map( ( value: any ) => new Player(value.player.name, value.player.position, value.player.team, value.player._id) )
        )
    }

    updatePlayer(player: Player){
        return this.http.patch<Player>(`${ environment.baseURL }/players/${ player._id}`, player)
    }
}