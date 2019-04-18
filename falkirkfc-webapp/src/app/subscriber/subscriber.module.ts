import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './squads/team/team.component';
import { PlayerComponent } from './squads/player/player.component';
import { EventComponent } from './events/event/event.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { ArticleComponent } from './news/article/article.component';
import { LeagueTableComponent } from './competitions/league-table/league-table.component';
import { FixturesComponent } from './competitions/fixtures/fixtures.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    declarations: [
        TeamComponent,
        PlayerComponent,
        EventComponent,
        EventListComponent,
        NewsListComponent,
        ArticleComponent,
        LeagueTableComponent,
        FixturesComponent,
        ProfileComponent
    ],
    imports: [
        CommonModule
    ]
})

export class SubscriberModule {

}