import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatRadioModule } from '@angular/material';

import { SquadsModule } from './squads/squads.module';
import { NewsModule } from './news/news.module';
import { EventsModule } from './events/events.module';
import { DashboardComponent } from './dashboard.component';
import { SubscriberRoutingModule } from './subscriber-routing.module';
import { ProfileViewComponent } from './profile/profile-view/profile-view.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';



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
    ],
    declarations: [
        DashboardComponent,
        ProfileViewComponent,
        ProfileEditComponent
    ]
})


export class SubscriberModule { }