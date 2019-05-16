import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatRadioModule, MatTabsModule, MatSidenavModule } from '@angular/material';

import { SquadsModule } from './league/squads/squads.module';
import { NewsModule } from './news/news.module';
import { EventsModule } from './events/events.module';
import { DashboardComponent } from './dashboard.component';
import { SubscriberRoutingModule } from './subscriber-routing.module';
import { ProfileViewComponent } from './profile/profile-view/profile-view.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { LeagueComponent } from './league/league.component';
import { FixturesComponent } from './league/fixtures/fixtures.component';
import { TableComponent } from './league/table/table.component';
import { MatchReportComponent } from './league/match-report/match-report.component';



// player tables with most goals, assists, own goals, yellow and red cards

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatRadioModule,
        SquadsModule,
        NewsModule,
        EventsModule,
        SubscriberRoutingModule,
        MatTabsModule
    ],
    declarations: [
        DashboardComponent,
        ProfileViewComponent,
        ProfileEditComponent,
        LeagueComponent,
        FixturesComponent,
        TableComponent,
        MatchReportComponent
    ]
})


export class SubscriberModule { }