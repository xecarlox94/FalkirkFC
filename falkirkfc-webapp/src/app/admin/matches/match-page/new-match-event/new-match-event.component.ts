import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { TeamService } from 'src/app/core/services/teams/team.service';
import { MatchService } from 'src/app/core/services/matches/match.service';
import { Match } from 'src/app/core/models/match.model';
import { Team } from 'src/app/core/models/team.model';
import { Player } from 'src/app/core/models/player.model';
import { MatchEventService } from 'src/app/core/services/matches/matchEvent.service';
import { MatchEvent } from 'src/app/core/models/matchEvent';

@Component({
  selector: 'app-new-match-event',
  templateUrl: './new-match-event.component.html',
  styleUrls: ['./new-match-event.component.scss']
})
export class NewMatchEventComponent implements OnInit {
  @Output() mEventCreated: EventEmitter<void> = new EventEmitter<void>();

  matchService: MatchService;
  matchEventService: MatchEventService;
  teamService: TeamService;
  actRoute: ActivatedRoute;

  match: Match;
  selectedPlayers: Player[];
  typeEvents: string[] = ["goal", "owngoal", "yellow", "red"];

  mEventForm: FormGroup = new FormGroup({
    team: new FormControl('', [ Validators.required ]),
    player: new FormControl('', [ Validators.required ]),
    typeEvent: new FormControl('', [ Validators.required ]),
    minute: new FormControl('', [ Validators.required ])
  })

  constructor(actRoute: ActivatedRoute, matchSrv: MatchService, teamSrv: TeamService, matchEventSrv: MatchEventService) {
    this.actRoute = actRoute;
    this.matchService = matchSrv;
    this.teamService = teamSrv;
    this.matchEventService = matchEventSrv;
  }  

  ngOnInit() {
    this.matchService.fetchMatch(this.actRoute.snapshot.params.id)
      .then( (match: Match) => {
        this.match = match;
        return this.teamService.fetchSquad(this.match.home._id).toPromise()
      })
      .then( (homeTeam: Team) => {
        this.match.home = homeTeam;
        return this.teamService.fetchSquad(this.match.away._id).toPromise()
      })
      .then( (awayTeam: Team) => {
        this.match.away = awayTeam;
      })
      

      this.mEventForm.get("team").valueChanges.subscribe( (teamID: string) => {
        this.mEventForm.get("player").setValue("")
        this.mEventForm.get("typeEvent").setValue("")
        this.mEventForm.get("minute").setValue("")
        if(teamID == this.match.home._id) this.selectedPlayers = this.match.home.getPlayers()
        if(teamID == this.match.away._id) this.selectedPlayers = this.match.away.getPlayers()
      })

  }


  onSubmit(){
    const matchEvent = new MatchEvent(this.mEventForm.value.typeEvent, this.mEventForm.value.minute, this.match._id)
    matchEvent.setTeam(this.mEventForm.value.team)
    matchEvent.setPlayer(this.mEventForm.value.player)
    this.matchEventService.createMatchEvent(matchEvent).then( (matchEvent: MatchEvent) => this.mEventCreated.emit() )
  }

  onCancel(){
    this.mEventCreated.emit()
  }

}
