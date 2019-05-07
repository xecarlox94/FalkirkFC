import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/core/models/match.model';
import { MatchService } from 'src/app/core/services/matches/match.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-match-page',
  templateUrl: './match-page.component.html',
  styleUrls: ['./match-page.component.scss']
})
export class MatchPageComponent implements OnInit {
  matchIDSubject: Subject<string> = new Subject<string>();
  route: ActivatedRoute;
  match: Match;
  matchService: MatchService;
  isCreatingMatchEvent: boolean;

  constructor(matchSrv: MatchService, actRoute: ActivatedRoute) {
    this.isCreatingMatchEvent = false;
    this.matchService = matchSrv;
    this.route = actRoute;
  }

  ngOnInit() {
    this.loadMatch()
  }

  emitMatchIDToChild(){
    this.matchIDSubject.next(this.match._id);
  }

  onMatchEventsChanges(){
    this.loadMatch();
  }

  onMatchEventCreated(){
    this.isCreatingMatchEvent = false;
    this.loadMatch()
  }

  loadMatch(){
    this.matchService.fetchMatch(this.route.snapshot.params.id).then( (match: Match) => {
      this.match = match;
      this.emitMatchIDToChild()
    })
  }

}
