import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/core/services/players/player.service';
import { Player } from 'src/app/core/models/player.model';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss']
})
export class PlayerPageComponent implements OnInit {
  playerService: PlayerService;
  actRoute: ActivatedRoute;
  router: Router;
  player: Player;

  constructor(playerSrv: PlayerService, router: Router, actRoute: ActivatedRoute) {
    this.playerService = playerSrv;
    this.router = router;
    this.actRoute = actRoute;
  }

  ngOnInit() {
    this.playerService.getPlayer(this.actRoute.snapshot.params.id).toPromise()
        .then( (player: Player) => this.player = player )
  }

  editPlayer(){
    this.router.navigate(["../", "edit", this.player._id ], { relativeTo: this.actRoute })
  }

  deletePlayer(){
    this.playerService.deletePlayer(this.player).toPromise()
        .then( (player: Player) => {
          console.log(player)
          this.router.navigate(["../../", "teams", this.player.team ], { relativeTo: this.actRoute })
        })
  }

}
