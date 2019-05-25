import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/core/services/players/player.service';
import { Player } from 'src/app/core/models/player.model';
import { TeamService } from 'src/app/core/services/teams/team.service';
import { Team } from 'src/app/core/models/team.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  router: Router;
  actRoute: ActivatedRoute;
  playerService: PlayerService;
  teamService: TeamService;
  player: Player;
  team: Team;

  constructor(actRoute: ActivatedRoute, router: Router, playerSrv: PlayerService, teamSrv: TeamService) {
    this.actRoute = actRoute;
    this.router = router;
    this.playerService = playerSrv;
    this.teamService = teamSrv;
  }

  ngOnInit() {
    const id = this.actRoute.snapshot.queryParamMap.get("id");
    this.playerService.getPlayer(id).toPromise()
        .then( (player: Player) => {
          this.player = player;
          return this.teamService.getTeam(player.team).toPromise()
        })
        .then( (team: Team) => this.team = team )
        .catch( (err) => { } )
  }

  visitTeamPage(){
    this.router.navigate([ "../", "team" ], { queryParams: { id: this.team._id }, relativeTo: this.actRoute })
  }

}
