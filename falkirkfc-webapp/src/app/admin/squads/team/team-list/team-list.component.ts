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
    this.teamService.fetchTeams().toPromise()
        .then( (fetchedTeams: Team[]) => this.teams = fetchedTeams)
  }
  
  deleteTeam(team: Team){
    this.teamService.deleteTeam(team).subscribe( () => {}, () => {}, () => {
      this.teamService.fetchTeams().subscribe( (teams: Team []) => {
        this.teams = teams;
      });
    })
  }

}
