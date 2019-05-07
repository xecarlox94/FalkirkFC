import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TeamService } from 'src/app/core/services/teams/team.service';
import { Team } from 'src/app/core/models/team.model';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.scss']
})
export class TeamEditComponent implements OnInit {
  route: ActivatedRoute;
  router: Router;
  editMode: boolean;
  idTeam: string;

  teamService: TeamService;

  teamForm = new FormGroup({
    name: new FormControl("", [ Validators.required ]),
    manager: new FormControl("", [ Validators.required ])
  })

  constructor(router: Router,route: ActivatedRoute, teamSrv: TeamService) {
    this.route = route;
    this.router = router;
    this.teamService = teamSrv;
  }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      if(params.id === undefined) {
        this.editMode = false
      } else {
        this.editMode = true;
        this.idTeam = params.id
        this.teamService.getTeam(this.idTeam).subscribe( (team: Team) => {
          this.teamForm.patchValue(team)
        })
      }
    })
  }

  onSubmit(){
    if(!this.editMode) {
      const team: Team = new Team(this.teamForm.value.name, this.teamForm.value.manager);
      this.teamService.createTeam(team).toPromise().then(
        () =>  this.navigateBack(),
        rej =>  this.navigateBack()
        )
    } else {
      const team = new Team(this.teamForm.value.name, this.teamForm.value.manager, this.idTeam)
      this.teamService.updateTeam(team).toPromise().then(
        () =>  this.navigateBack(),
        rej =>  this.navigateBack()
        )
    }
  }
  
  navigateBack() {
    this.router.navigate(['../../'], { relativeTo: this.route })
  }
}
