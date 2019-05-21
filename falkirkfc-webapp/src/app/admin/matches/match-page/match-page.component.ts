import { Component, OnInit, OnDestroy } from '@angular/core';
import { Match } from 'src/app/core/models/match.model';
import { MatchService } from 'src/app/core/services/matches/match.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Team } from 'src/app/core/models/team.model';
import { SocketClientService } from 'src/app/core/services/livestream/socket-client.service';
import { MatchEvent } from 'src/app/core/models/matchEvent';
import { MatchStream } from 'src/app/core/models/matchStream.model';

@Component({
  selector: 'app-match-page',
  templateUrl: './match-page.component.html',
  styleUrls: ['./match-page.component.scss']
})
export class MatchPageComponent implements OnInit, OnDestroy {
  socketClientService: SocketClientService;
  matchIDSubject: Subject<string> = new Subject<string>();
  router: Router;
  route: ActivatedRoute;
  match: Match;
  matchService: MatchService;
  isCreatingMatchEvent: boolean;

  constructor(matchSrv: MatchService, actRoute: ActivatedRoute, router: Router, socketClientSrv: SocketClientService) {
    this.isCreatingMatchEvent = false;
    this.matchService = matchSrv;
    this.route = actRoute;
    this.router = router;
    this.socketClientService = socketClientSrv; 
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

  onMatchEventCreated(matchEvent: MatchEvent){
    this.isCreatingMatchEvent = false;
    this.loadMatch(matchEvent)
  }

  loadMatch(matchEvent?: MatchEvent){
    this.matchService.fetchMatch(this.route.snapshot.params.id).then( (match: Match) => {
      this.match = match;
      this.emitMatchIDToChild()
    
      const matchStream = new MatchStream(this.match._id, true)
      if(matchEvent) matchStream.setMatchEvent(matchEvent);
      
      this.socketClientService.emitMatchStream(matchStream);
    })
  }

  
  deleteMatch(){
    this.matchService.deleteMatch(this.match._id).then( () => {
      this.router.navigate(["../"], { relativeTo: this.route })
    })
  }

  editMatch(){
    this.router.navigate([ "../", "edit", this.match._id ], { relativeTo: this.route })
  }

  visitTeamPage(team: Team){
    this.router.navigate([ "/adminDashboard", "teams", team._id ], { relativeTo: this.route })
  }

  
  ngOnDestroy(): void {
    this.socketClientService.emitMatchStream( new MatchStream(this.match._id, false) );
  }

}
