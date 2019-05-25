import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/core/services/teams/team.service';
import { Team } from 'src/app/core/models/team.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})

export class TeamComponent implements OnInit {
  router: Router;
  actRoute: ActivatedRoute;
  teamService: TeamService;
  team: Team;

  constructor(actRoute: ActivatedRoute, router: Router, teamSrv: TeamService) {
    this.actRoute = actRoute;
    this.router = router;
    this.teamService = teamSrv;
  }

  ngOnInit() {
    const id = this.actRoute.snapshot.queryParamMap.get("id")
    this.teamService.fetchSquad(id).toPromise()
        .then( (team: Team) => this.team = team )
  }

}
