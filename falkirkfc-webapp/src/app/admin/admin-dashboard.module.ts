import { NgModule } from "@angular/core";
import { SubscribersComponent } from './subscribers/subscribers.component';
import { EventsComponent } from './events/events.component';
import { SubscribersListComponent } from './subscribers/subscribers-list/subscribers-list.component';
import { SubscribersEditComponent } from './subscribers/subscribers-edit/subscribers-edit.component';
import { TeamListComponent } from './squads/team/team-list/team-list.component';
import { TeamEditComponent } from './squads/team/team-edit/team-edit.component';
import { PlayerEditComponent } from './squads/player/player-edit/player-edit.component';
import { PlayerListComponent } from './squads/player/player-list/player-list.component';




@NgModule({
  declarations: [
    SubscribersComponent,
    EventsComponent,
    SubscribersListComponent,
    SubscribersEditComponent,
    TeamListComponent,
    TeamEditComponent,
    PlayerEditComponent,
    PlayerListComponent
  ]
})


export class AdminDashboardModule { }