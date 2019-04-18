import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SquadsModule } from './squads/squads.module';
import { ProfileModule } from './profile/profile.module';
import { NewsModule } from './news/news.module';
import { EventsModule } from './events/events.module';
import { CompetitionsModule } from './competitions/competitions.module';



@NgModule({
    imports: [
        CommonModule,
        SquadsModule,
        ProfileModule,
        NewsModule,
        EventsModule,
        CompetitionsModule
    ]
})

// player tables with most goals, assists, own goals, yellow and red cards

export class SubscriberModule { }