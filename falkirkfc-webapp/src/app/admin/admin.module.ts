import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatListModule, MatGridListModule, MatSelectModule, MatRadioModule } from '@angular/material';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminDashboardComponent } from './admin-dashboard.component';
import { TeamEditComponent } from './squads/team/team-edit/team-edit.component';
import { TeamListComponent } from './squads/team/team-list/team-list.component';
import { PlayerPageComponent } from './squads/player/player-page/player-page.component';
import { PlayerEditComponent } from './squads/player/player-edit/player-edit.component';
import { PlayerListComponent } from './squads/player/player-list/player-list.component';
import { TeamPageComponent } from './squads/team/team-page/team-page.component';
import { MatchListComponent } from './matches/match-list/match-list.component';
import { MatchPageComponent } from './matches/match-page/match-page.component';
import { MatchEditComponent } from './matches/match-edit/match-edit.component';
import { MatchEventListComponent } from './matches/match-page/match-event-list/match-event-list.component';
import { NewMatchEventComponent } from './matches/match-page/new-match-event/new-match-event.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    TeamEditComponent,
    TeamListComponent,
    PlayerPageComponent,
    PlayerEditComponent,
    PlayerListComponent,
    TeamPageComponent,
    MatchListComponent,
    MatchPageComponent,
    MatchEditComponent,
    MatchEventListComponent,
    NewMatchEventComponent
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
    MatSelectModule,
    MatRadioModule
  ]
})


export class AdminModule { }