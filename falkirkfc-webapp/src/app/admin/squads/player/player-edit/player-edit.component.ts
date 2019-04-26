import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Team } from 'src/app/core/models/team.model';
import { TeamService } from 'src/app/core/services/teams/team.service';
import { Player } from 'src/app/core/models/player.model';
import { PlayerService } from 'src/app/core/services/players/player.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.scss']
})
export class PlayerEditComponent implements OnInit {
  teamService: TeamService;
  playerService: PlayerService;
  router: Router;
  actRoute: ActivatedRoute;

  readonly positions = [ "goalkeeper", "defender", "midfielder", "attacker"];
  teams: Team[];
  editMode: boolean;
  editedPlayerTeamID: string;
  addToTeamMode: boolean
  params: Params;

  playerForm = new FormGroup({
    name: new FormControl('', [ Validators.required, Validators.minLength(3)]),
    position: new FormControl('', [ Validators.required ]),
    team: new FormControl('', [ Validators.required ])
  })

  constructor(playerSrv: PlayerService, teamSrv: TeamService, router: Router, actRoute: ActivatedRoute) {
    this.playerService = playerSrv
    this.teamService = teamSrv;
    this.router = router
    this.actRoute = actRoute;
    this.editMode = false;
    this.addToTeamMode = false;
  }

  ngOnInit() {
    this.teamService.fetchTeams().toPromise().then( (teams: Team[]) => {
      this.teams = teams
      this.params = this.actRoute.snapshot.params;

      if(this.params.id) {
        this.editMode = true;

        this.playerService.getPlayer(this.params.id).toPromise().then( (player: Player) => {
          this.playerForm.patchValue(player)
          this.editedPlayerTeamID = player.team;
          this.playerForm.controls["team"].disable()
        })

      } else if( this.params.teamID && this.teams.some( team => team._id == this.params.teamID)) {
        this.addToTeamMode = true;
        this.editedPlayerTeamID = this.params.teamID;
        this.playerForm.controls["team"].setValue(this.editedPlayerTeamID)
        this.playerForm.controls["team"].disable()
      }
    })

  }


  onSubmit(){
    this.playerForm.controls["team"].enable()
    const player = new Player(this.playerForm.value.name,this.playerForm.value.position,this.playerForm.value.team)
    if( this.editMode ){
      player.setId(this.params.id)
      this.playerService.updatePlayer(player).toPromise()
          .then( () => this.router.navigate(['/adminDashboard/teams/', player.team] ) )
          .catch( (rej) => console.log(rej))
    } else {
      this.playerService
          .createPlayer(player).toPromise()
          .then(() => this.router.navigate(['/adminDashboard/teams/', player.team] ) )
          .catch( (rej) => console.log(rej) )

    }
    
    this.playerForm.controls["team"].disable()
  }

}
