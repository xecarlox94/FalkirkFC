import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from 'src/app/core/models/player.model';
import { PlayerService } from 'src/app/core/services/players/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  playerService: PlayerService;
  router: Router;
  @Input() players: Player[];

  constructor(playerSrv: PlayerService, router: Router) {
    this.playerService = playerSrv;
    this.router = router;
  }

  ngOnInit() {
  }

  visitPlayerPage(player: Player){
    this.router.navigate(['./adminDashboard/player/', player._id])
  }
  
  
}
