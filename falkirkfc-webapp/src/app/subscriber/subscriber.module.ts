import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRadioModule } from '@angular/material';

import { SquadsModule } from './squads/squads.module';
import { NewsModule } from './news/news.module';
import { EventsModule } from './events/events.module';
import { CompetitionsModule } from './competitions/competitions.module';
import { DashboardComponent } from './dashboard.component';
import { SubscriberRoutingModule } from './subscriber-routing.module';
import { ProfileViewComponent } from './profile/profile-view/profile-view.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        SquadsModule,
        NewsModule,
        EventsModule,
        CompetitionsModule,
        SubscriberRoutingModule,
        MatRadioModule
    ],
    declarations: [
        DashboardComponent,
        ProfileViewComponent,
        ProfileEditComponent
    ]
})

// player tables with most goals, assists, own goals, yellow and red cards

export class SubscriberModule { }