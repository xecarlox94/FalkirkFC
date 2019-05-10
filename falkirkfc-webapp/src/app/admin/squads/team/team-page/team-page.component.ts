import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/core/models/team.model';
import { TeamService } from 'src/app/core/services/teams/team.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {
  router: Router;
  actRoute: ActivatedRoute;
  teamService: TeamService;
  team: Team;

  constructor(teamSrv: TeamService, router: Router, actRoute: ActivatedRoute ) {
    this.teamService = teamSrv;
    this.router = router;
    this.actRoute = actRoute;
  }

  ngOnInit() {
    this.loadSquad()
  }

  loadSquad(){
    const id = this.actRoute.snapshot.params.id;
    this.teamService.fetchSquad(id).toPromise().then( (team: Team) => this.team = team )
  }

  onEditTeam(){
    this.router.navigate(['../edit', this.team._id ], { relativeTo: this.actRoute })
  }

  addPlayerToTeam(){
    this.router.navigate([ './adminDashboard/player/new/', this.team._id ])
  }
  

  deleteTeam(){
    this.teamService.deleteTeam(this.team).toPromise()
        .then( () => {
          this.router.navigate([ "../"], { relativeTo: this.actRoute })
        })
  }

}
