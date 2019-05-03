import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/core/models/team.model';
import { TeamService } from 'src/app/core/services/teams/team.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-match-edit',
  templateUrl: './match-edit.component.html',
  styleUrls: ['./match-edit.component.scss']
})
export class MatchEditComponent implements OnInit {
  teamService: TeamService;
  teams: Team[];

  matchForm: FormGroup = new FormGroup({
    homeTeam: new FormControl(null, [ Validators.required ]),
    awayTeam: new FormControl(null, [ Validators.required ]),
    round: new FormControl(null, [ Validators.required ])
  })

  constructor(teamSrv: TeamService) {
    this.teamService = teamSrv;
  }

  ngOnInit() {
    this.teamService.fetchTeams().toPromise().then( (teams: Team[]) => this.teams = teams )
  }



}
