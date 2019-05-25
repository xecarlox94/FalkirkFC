import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ParamMap, Router } from '@angular/router';
import { Match } from 'src/app/core/models/match.model';
import { MatchService } from 'src/app/core/services/matches/match.service';
import { MatchEvent } from 'src/app/core/models/matchEvent';
import { MatchEventService } from 'src/app/core/services/matches/matchEvent.service';
import { Team } from 'src/app/core/models/team.model';
import { Player } from 'src/app/core/models/player.model';

@Component({
  selector: 'app-match-report',
  templateUrl: './match-report.component.html',
  styleUrls: ['./match-report.component.scss']
})
export class MatchReportComponent implements OnInit {
  router: Router;
  actRoute: ActivatedRoute;
  matchService: MatchService;
  mEventsService: MatchEventService;
  match: Match;
  mEvents: MatchEvent[];
  isLive: boolean;

  constructor(actRoute: ActivatedRoute, router: Router, matchSrv: MatchService, mEventsSrv: MatchEventService) {
    this.mEventsService = mEventsSrv;
    this.actRoute = actRoute;
    this.matchService = matchSrv;
    this.router = router;
  }

  ngOnInit() {
    this.actRoute.queryParamMap.subscribe( (queryMap: ParamMap) => {
      this.matchService.fetchMatch(queryMap.get("id"))
        .then( (match: Match) => {
          this.match = match;
          this.isLive = queryMap.has("live")
          return this.mEventsService.fetchMatchEvents(this.match._id)
        })
        .then( (mEvents: MatchEvent[]) => this.mEvents = mEvents )
        .catch( (err) => {})
    })
  }

  visitTeamPage(team: Team){
    this.router.navigate([ "../", "team" ], { queryParams: { id: team._id } , relativeTo: this.actRoute })
  }

  visitPlayerPage(player: Player){
    this.router.navigate([ "../", "player" ], { queryParams: { id: player._id } , relativeTo: this.actRoute })
  }

}
