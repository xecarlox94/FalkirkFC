import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatRadioModule, MatTabsModule, MatListModule } from '@angular/material';


import { DashboardComponent } from './dashboard.component';
import { SubscriberRoutingModule } from './subscriber-routing.module';
import { ProfileViewComponent } from './profile/profile-view/profile-view.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { LeagueComponent } from './league/league.component';
import { FixturesComponent } from './league/fixtures/fixtures.component';
import { TableComponent } from './league/table/table.component';
import { MatchReportComponent } from './league/match-report/match-report.component';
import { PlayerComponent } from './league/squads/player/player.component';
import { TeamComponent } from './league/squads/team/team.component';
import { ArticleComponent } from './news/article/article.component';
import { EventComponent } from './events/event/event.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { PlayerGridComponent } from './league/squads/team/player-grid/player-grid.component';


@NgModule({
    imports: [ // loads all module's components
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SubscriberRoutingModule, // router module
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatRadioModule,
        MatTabsModule,
        MatListModule
    ],
    declarations: [ // loads all components
        DashboardComponent,
        ProfileViewComponent,
        ProfileEditComponent,
        LeagueComponent,
        FixturesComponent,
        TableComponent,
        MatchReportComponent,
        PlayerComponent,
        TeamComponent,
        ArticleComponent,
        NewsListComponent,
        EventComponent,
        EventListComponent,
        PlayerGridComponent
    ]
})


export class SubscriberModule { }