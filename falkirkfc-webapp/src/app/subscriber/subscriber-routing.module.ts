import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserAuthGuard } from '../core/services/guards/user-auth.guard';

import { DashboardComponent } from './dashboard.component';
import { ProfileViewComponent } from './profile/profile-view/profile-view.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { ArticleComponent } from './news/article/article.component';
import { EventComponent } from './events/event/event.component';
import { LeagueComponent } from './league/league.component';
import { MatchReportComponent } from './league/match-report/match-report.component';
import { TableComponent } from './league/table/table.component';
import { TeamComponent } from './league/squads/team/team.component';
import { PlayerComponent } from './league/squads/player/player.component';
import { FixturesComponent } from './league/fixtures/fixtures.component';

const subscriberRoutes: Route[] = [
    {
        path: "",
        component: DashboardComponent,
        canActivate: [ UserAuthGuard ],
        children: 
        [
            { path: "", pathMatch: "full", redirectTo: "profile" },
            { path: "profile", component: ProfileViewComponent },
            { path: "profile/edit", component: ProfileEditComponent },
            { path: "news", component: NewsListComponent },
            { path: "news/:id", component: ArticleComponent },
            { path: "events", component: EventListComponent },
            { path: "events/:id", component: EventComponent },
            {
                path: "league", component: LeagueComponent, children: 
                [
                    { path: "", redirectTo: "table" },
                    { path: "fixtures", component: FixturesComponent },
                    { path: "table", component: TableComponent },
                    { path: "team", component: TeamComponent },
                    { path: "player", component: PlayerComponent },
                    { path: "match", component: MatchReportComponent }
                ]
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(subscriberRoutes)
    ],
    exports: [
        RouterModule
    ]
})


export class SubscriberRoutingModule { }