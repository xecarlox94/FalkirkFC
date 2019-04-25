import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatListModule, MatGridListModule, MatSelectModule } from '@angular/material';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminDashboardComponent } from './admin-dashboard.component';
import { TeamEditComponent } from './squads/team/team-edit/team-edit.component';
import { TeamListComponent } from './squads/team/team-list/team-list.component';
import { PlayerPageComponent } from './squads/player/player-page/player-page.component';
import { PlayerEditComponent } from './squads/player/player-edit/player-edit.component';
import { PlayerListComponent } from './squads/player/player-list/player-list.component';
import { TeamPageComponent } from './squads/team/team-page/team-page.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    TeamEditComponent,
    TeamListComponent,
    PlayerPageComponent,
    PlayerEditComponent,
    PlayerListComponent,
    TeamPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatSelectModule
  ]
})


export class AdminModule { }