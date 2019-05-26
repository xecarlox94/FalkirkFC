import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Match } from 'src/app/core/models/match.model';
import { MatchService } from 'src/app/core/services/matches/match.service';
import { MatchEvent } from 'src/app/core/models/matchEvent';
import { MatchEventService } from 'src/app/core/services/matches/matchEvent.service';
import { Team } from 'src/app/core/models/team.model';
import { Player } from 'src/app/core/models/player.model';
import { LiveMatchService } from 'src/app/core/services/livestream/live-match.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-match-report',
  templateUrl: './match-report.component.html',
  styleUrls: ['./match-report.component.scss']
})
export class MatchReportComponent implements OnInit, OnDestroy {
  matchStatusSubs: Subscription;
  router: Router;
  actRoute: ActivatedRoute;
  liveMatchService: LiveMatchService;
  matchService: MatchService;
  mEventsService: MatchEventService;
  match: Match;
  mEvents: MatchEvent[];
  isLive: boolean;

  constructor(actRoute: ActivatedRoute, router: Router, matchSrv: MatchService, mEventsSrv: MatchEventService, liveMatchService: LiveMatchService) {
    this.mEventsService = mEventsSrv;
    this.actRoute = actRoute;
    this.matchService = matchSrv;
    this.router = router;
    this.liveMatchService = liveMatchService;
  }

  ngOnInit() {
    this.actRoute.queryParamMap.subscribe( (queryMap: ParamMap) => {
      if(queryMap.has("live")){
        if( !this.match || this.match._id !== queryMap.get("id") ) {
          this.loadMatchReport(queryMap.get("id"));
          this.isLive = true;
        }

        this.matchStatusSubs = this.liveMatchService.statusSubject.subscribe( (matchStatus) => {
          this.isLive = matchStatus.live;
          this.loadMatchReport(matchStatus._id)
        })
      } else {
        this.isLive = false;
        this.loadMatchReport(queryMap.get("id"))
      }
    })
  }

  loadMatchReport(id: string){
    this.matchService.fetchMatch(id)
    .then( (match: Match) => {
      this.match = match;
      return this.mEventsService.fetchMatchEvents(this.match._id)
    })
    .then( (mEvents: MatchEvent[]) => this.mEvents = mEvents )
    .catch( (err) => {} )
  }

  visitTeamPage(team: Team){
    this.router.navigate([ "../", "team" ], { queryParams: { id: team._id } , relativeTo: this.actRoute })
  }

  visitPlayerPage(player: Player){
    this.router.navigate([ "../", "player" ], { queryParams: { id: player._id } , relativeTo: this.actRoute })
  }

  
  ngOnDestroy(): void {
    if(this.matchStatusSubs !== undefined) this.matchStatusSubs.unsubscribe()
  }

}
