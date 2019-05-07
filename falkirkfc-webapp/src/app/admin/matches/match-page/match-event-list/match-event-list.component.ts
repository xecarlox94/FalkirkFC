import { Component, OnInit, Input, AfterContentInit, AfterViewInit, AfterContentChecked, DoCheck, Output, EventEmitter, OnDestroy } from '@angular/core';
import { MatchEvent } from 'src/app/core/models/matchEvent';
import { MatchEventService } from 'src/app/core/services/matches/matchEvent.service';
import { Observable, Subscription } from 'rxjs';

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

  constructor(matchEventSrv: MatchEventService) {
    this.matchEventService = matchEventSrv
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
  
}
