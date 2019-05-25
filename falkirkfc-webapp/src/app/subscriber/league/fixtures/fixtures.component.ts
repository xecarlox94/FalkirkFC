import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/core/services/matches/match.service';
import { Match } from 'src/app/core/models/match.model';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.scss']
})
export class FixturesComponent implements OnInit {
  matchService: MatchService;
  actRouter: ActivatedRoute;
  matches: Match[];
  round: number;
  router: Router;

  constructor(actRouter: ActivatedRoute, matchSrv: MatchService, router: Router) {
    this.actRouter = actRouter;
    this.matchService = matchSrv;
    this.router = router;
  }

  ngOnInit() {
    let round = Number(this.actRouter.snapshot.queryParamMap.get("round"));
    if(!round) round = 1;
    this.loadRound(round)
  }

  loadRound(round: number){
    this.matchService.getRoundMatches(round).then( (matches: Match[]) => {
      if( matches.length === 0) throw new Error("No matches")
      this.matches = matches
      this.round = this.matches[0].round
    })
    .catch( (err) => this.loadRound(round - 1) )
  }

  visitMatchPage(match: Match){
    this.router.navigate( [ '../', 'match' ], { queryParams: { id: match._id }, relativeTo: this.actRouter })
  }

}
