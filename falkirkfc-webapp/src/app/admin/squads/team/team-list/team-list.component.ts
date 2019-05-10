import { Component, OnInit, OnDestroy } from '@angular/core';
import { Team } from 'src/app/core/models/team.model';
import { TeamService } from 'src/app/core/services/teams/team.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  teams: Team[];
  teamService: TeamService;

  constructor(teamSrv: TeamService) {
    this.teamService = teamSrv;
  }

  ngOnInit() {
    this.loadTeamsList().then( (teams: Team[]) => this.teams = teams)
  }

  loadTeamsList(): Promise<Team[]>{
    return this.teamService.fetchTeams().toPromise();
  }

}
