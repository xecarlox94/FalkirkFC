import { NgModule } from "@angular/core";


import { SubscribersListComponent } from './subscribers/subscribers-list/subscribers-list.component';
import { SubscribersEditComponent } from './subscribers/subscribers-edit/subscribers-edit.component';
import { TeamListComponent } from './squads/team/team-list/team-list.component';
import { TeamEditComponent } from './squads/team/team-edit/team-edit.component';
import { PlayerEditComponent } from './squads/player/player-edit/player-edit.component';
import { PlayerListComponent } from './squads/player/player-list/player-list.component';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news/news-list/news-list.component';
import { ArticleEditComponent } from './news/article-edit/article-edit.component';
import { EventEditComponent } from './events/event-edit/event-edit.component';
import { EventListComponent } from './events/event-list/event-list.component';




@NgModule({
  declarations: [
    SubscribersListComponent,
    SubscribersEditComponent,
    TeamListComponent,
    TeamEditComponent,
    PlayerEditComponent,
    PlayerListComponent,
    NewsListComponent,
    ArticleEditComponent,
    EventEditComponent,
    EventListComponent
  ],
  imports: [
    CommonModule
  ]
})


export class AdminDashboardModule { }