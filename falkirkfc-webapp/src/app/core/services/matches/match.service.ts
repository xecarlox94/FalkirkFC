import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Match } from '../../models/match.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Team } from '../../models/team.model';


@Injectable({ providedIn: "root" })

export class MatchService {
    http: HttpClient;

    constructor(http: HttpClient){
        this.http = http;
    }

    fetchMatches(): Observable<Match[]> {
        return this.http.get<Match[]>(`${ environment.baseURL }/matches/`).pipe(
            map( (values: any) => {
                const matchesJSON = values.matches;
                const matches: Match[] = []
                for (let i = 0; i < matchesJSON.length; i++) {
                    const homeTeam = new Team(matchesJSON[i].home.name, matchesJSON[i].home.name, matchesJSON[i].home._id);
                    const awayTeam = new Team(matchesJSON[i].away.name, matchesJSON[i].away.name, matchesJSON[i].away._id);
                    matches[i] = new Match(homeTeam, awayTeam, matchesJSON[i].round, matchesJSON[i].time, matchesJSON[i]._id);
                }
                return matches;
            })
        )
    }

}