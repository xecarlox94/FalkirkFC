import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../../models/team.model';
import { environment } from 'src/environments/environment';

import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Player } from '../../models/player.model';

@Injectable({
  providedIn: 'root'
})

export class TeamService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  createTeam(team: Team){
    return this.http.post<Team>(`${ environment.baseURL }/teams`, team);
  }

  fetchTeams(): Observable<Team[]> {
    return this.http.get<any>(`${ environment.baseURL }/teams`).pipe(
      map( bodyJSON => {
        var teams: Team[] = [];
        for (var i = 0; i < bodyJSON.teams.length; i++) {
          teams[i] = new Team(bodyJSON.teams[i].name, bodyJSON.teams[i].name, bodyJSON.teams[i]._id)
        }
        return teams;
      }))
  }

  updateTeam(team: Team){
    return this.http.patch<Team>(`${ environment.baseURL }/teams/${ team._id }`, team);
  }

  deleteTeam(team: Team){
    return this.http.delete<Team>(`${ environment.baseURL }/teams/${ team._id }`)
  }

  getTeam(id: string){
    return this.http.get<Team>(`${ environment.baseURL }/teams/${ id }`).pipe(
      map( (value: any) => new Team(value.team.name, value.team.manager, value.team._id) )
    );
  }

  fetchSquad(id: string): Observable<Team>{
    return this.http.get<Team>(`${ environment.baseURL }/teams/squad/${ id }`).pipe(
      map( (value: any ) => {
        const team = new Team(value.squad.team.name, value.squad.team.manager, value.squad.team._id );
        var players: Player[] = []
        for(var i = 0; i < value.squad.players.length; i++){
          players[i] = new Player(value.squad.players[i].name, value.squad.players[i].position, team._id, value.squad.players[i]._id)
        }
        team.setPlayers(players)
        return team;
      })
    )
  }
  
}
