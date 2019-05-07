import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/core/models/team.model';
import { TeamService } from 'src/app/core/services/teams/team.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchService } from 'src/app/core/services/matches/match.service';
import { Match } from 'src/app/core/models/match.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match-edit',
  templateUrl: './match-edit.component.html',
  styleUrls: ['./match-edit.component.scss']
})
export class MatchEditComponent implements OnInit {
  router: Router;
  activeRoute: ActivatedRoute;
  teamService: TeamService;
  matchService: MatchService;
  teams: Team[];
  editMode: boolean;
  matchID: string;

  matchForm: FormGroup = new FormGroup({
    home: new FormControl(null, [ Validators.required ]),
    away: new FormControl(null, [ Validators.required ]),
    round: new FormControl(null, [ Validators.required ])
  })

  constructor(teamSrv: TeamService, matchSrv: MatchService, router: Router, actRoute: ActivatedRoute) {
    this.activeRoute = actRoute;
    this.router = router;
    this.matchService = matchSrv;
    this.teamService = teamSrv;
  }

  ngOnInit() {
    this.teamService.fetchTeams().toPromise().then( (teams: Team[]) => {
      this.teams = teams;
      this.matchID = this.activeRoute.snapshot.params.id;
      if(this.matchID) {
        this.editMode = true;
        this.matchService.fetchMatch(this.matchID)
            .then( (match: Match) => {
              this.matchForm.patchValue({
                home: match.home._id,
                away: match.away._id,
                round: match.round
              })
              this.matchForm.controls['home'].disable()
              this.matchForm.controls['away'].disable()
            })
            .catch( () => this.router.navigate(['../../'], { relativeTo: this.activeRoute }) )
      }
      else {
        this.editMode = false
      };
    })
  }

  onSubmit() {
    const value = this.matchForm.value;
    if(this.editMode){
      const match = new Match(value.home, value.away, value.round, Date.now().toString(), this.matchID)
      this.matchService.updateMatch(match)
          .then( (value) => this.router.navigate(['../../'], { relativeTo: this.activeRoute }) )
    } else {
      const match = new Match(value.home, value.away, value.round, Date.now().toString())
      this.matchService.createMatch(match)
          .then( (match: Match) => this.navigateBack() )
          .catch( rej => this.navigateBack() )
    }
  }
  

  navigateBack(){
    this.router.navigate(['../'], { relativeTo: this.activeRoute })
  }
}
