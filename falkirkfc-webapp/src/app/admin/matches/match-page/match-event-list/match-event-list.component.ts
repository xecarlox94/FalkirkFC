import { Component, OnInit, Input, AfterContentInit, AfterViewInit, AfterContentChecked, DoCheck, Output, EventEmitter, OnDestroy } from '@angular/core';
import { MatchEvent } from 'src/app/core/models/matchEvent';
import { MatchEventService } from 'src/app/core/services/matches/matchEvent.service';
import { Observable, Subscription } from 'rxjs';
import { Player } from 'src/app/core/models/player.model';
import { Router } from '@angular/router';
import { Team } from 'src/app/core/models/team.model';

@Component({
  selector: 'app-match-event-list',
  templateUrl: './match-event-list.component.html',
  styleUrls: ['./match-event-list.component.scss']
})
export class MatchEventListComponent implements OnInit, OnDestroy {
  @Input() mEventsObs: Observable<string>;
  @Output() mEventChanges: EventEmitter<void> = new EventEmitter<void>();
  mEventsSubs: Subscription;
  matchEvents: MatchEvent[];
  matchEventService: MatchEventService;
  router: Router;

  constructor(matchEventSrv: MatchEventService, router: Router) {
    this.matchEventService = matchEventSrv;
    this.router = router;
  }
  

  ngOnInit() {
    this.mEventsSubs = this.mEventsObs.subscribe( (matchID: string) => this.loadMatchEvents(matchID) )
  }

  loadMatchEvents(matchID: string){
    this.matchEventService.fetchMatchEvents(matchID).then( (matchEvents: MatchEvent[]) => this.matchEvents = matchEvents )
  }

  deleteMatch(matchEvent: MatchEvent){
    this.matchEventService.deleteMatchEvent(matchEvent).then( () => this.mEventChanges.emit() )
  }

  ngOnDestroy(): void {
    this.mEventsSubs.unsubscribe()
  }


  visitPlayerPage(player: Player){
    this.router.navigate(["adminDashboard", "player", player._id])
  }

  visitTeamPage(team: Team){
    this.router.navigate(["adminDashboard", "teams", team._id])
  }
  
}
