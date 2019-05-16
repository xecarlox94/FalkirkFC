import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatListModule, MatGridListModule, MatSelectModule, MatRadioModule, MatTabsModule } from '@angular/material';

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
import { EventListComponent } from './events/event-list/event-list.component';
import { EventEditComponent } from './events/event-edit/event-edit.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { ArticleEditComponent } from './news/article-edit/article-edit.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserPageComponent } from './users/user-page/user-page.component';
import { ArticlePageComponent } from './news/article-page/article-page.component';
import { EventPageComponent } from './events/event-page/event-page.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatSelectModule,
    MatRadioModule,
    MatTabsModule
  ],
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
    NewMatchEventComponent,
    EventListComponent,
    EventEditComponent,
    NewsListComponent,
    ArticleEditComponent,
    UserListComponent,
    UserEditComponent,
    UserPageComponent,
    ArticlePageComponent,
    EventPageComponent
  ]
})


export class AdminModule { }