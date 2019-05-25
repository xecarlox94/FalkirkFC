import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/core/models/player.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-player-grid',
  templateUrl: './player-grid.component.html',
  styleUrls: ['./player-grid.component.scss']
})
export class PlayerGridComponent implements OnInit {
  @Input() players: Player[];
  actRoute: ActivatedRoute;
  router: Router;

  constructor(actRoute: ActivatedRoute, router: Router) {
    this.actRoute = actRoute;
    this.router = router;
  }

  ngOnInit() { }

  visitPlayerPage(player: Player){
    this.router.navigate( [ "../", "player" ], { queryParams: { id: player._id }, relativeTo: this.actRoute })
  }

}
