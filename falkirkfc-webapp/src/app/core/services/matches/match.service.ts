import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

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

    fetchMatches(): Promise<Match[]> {
        return this.http.get<Match[]>(`${ environment.baseURL }/matches/`).pipe(
            map( (values: any) => {
                const matchesJSON = values.matches;
                const matches: Match[] = []
                for (let i = 0; i < matchesJSON.length; i++) {
                    const homeTeam = new Team(matchesJSON[i].home.name, matchesJSON[i].home.manager, matchesJSON[i].home._id)
                    const awayTeam = new Team(matchesJSON[i].away.name, matchesJSON[i].away.manager, matchesJSON[i].away._id)
                    matches[i] = new Match(homeTeam, awayTeam, matchesJSON[i].round, matchesJSON[i].time, matchesJSON[i]._id);
                    matches[i].setResult(matchesJSON[i].homeScore, matchesJSON[i].awayScore)
                }
                return matches;
            })
        ).toPromise()
    }

    getRoundMatches(round: number): Promise<Match[]> {
        return this.http.get<Match[]>(`${ environment.baseURL }/matches/round/${ round }`).pipe(
            map( (values: any) => {
                const matchesJSON = values.matches;
                const matches: Match[] = []
                for (let i = 0; i < matchesJSON.length; i++) {
                    const homeTeam = new Team(matchesJSON[i].home.name, matchesJSON[i].home.manager, matchesJSON[i].home._id)
                    const awayTeam = new Team(matchesJSON[i].away.name, matchesJSON[i].away.manager, matchesJSON[i].away._id)
                    matches[i] = new Match(homeTeam, awayTeam, matchesJSON[i].round, matchesJSON[i].time, matchesJSON[i]._id);
                    matches[i].setResult(matchesJSON[i].homeScore, matchesJSON[i].awayScore)
                }
                return matches;
            })
        ).toPromise()
    }

    fetchMatch(id: string): Promise<Match> {
        return this.http.get<Match>(`${ environment.baseURL }/matches/${ id }`).pipe(
            map( (value: any) => {
                const matchReport = value.matchReport;
                const homeTeam = new Team(matchReport.home.name, matchReport.home.manager, matchReport.home._id)
                const awayTeam = new Team(matchReport.away.name, matchReport.away.manager, matchReport.away._id)
                const match = new Match(homeTeam, awayTeam, matchReport.round, matchReport.time, matchReport._id)
                match.setResult(matchReport.homeScore, matchReport.awayScore)
                return match;
            })
        ).toPromise()
    }

    updateMatch(match: Match) {
        return this.http.patch<Match>(`${ environment.baseURL }/matches/${ match._id }`, match).pipe(
            map( (value: any) => new Match(value.match.home, value.match.away, value.match.round, value.match.time, value.match._id) )
        ).toPromise()
    }

    createMatch(match: Match): Promise<Match> {
        return this.http.post<Match>(`${ environment.baseURL }/matches/`, match).pipe(
            map( (value) => new Match(value.home, value.away, value.round, value.time, value._id) )
        ).toPromise()
    }

    deleteMatch(id: string): Promise<void> {
        return this.http.delete<void>(`${ environment.baseURL }/matches/${ id}`).toPromise()
    }

}