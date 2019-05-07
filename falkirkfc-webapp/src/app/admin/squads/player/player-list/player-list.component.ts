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
  @Output() onDeletedPlayer: EventEmitter<void> = new EventEmitter<void>();

  constructor(playerSrv: PlayerService, router: Router) {
    this.playerService = playerSrv;
    this.router = router;
  }

  ngOnInit() {
  }

  editPlayer(player: Player){
    this.router.navigate([ './adminDashboard/player/edit/', player._id ])
  }

  deletePlayer(player: Player){
    this.playerService.deletePlayer(player).toPromise().then( (player: Player) => {
      console.log(player)
      this.onDeletedPlayer.emit()
    }).catch( (rej) => console.log(rej) )
  }

}
