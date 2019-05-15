import { NgModule } from "@angular/core";
import { RouterModule, Route } from '@angular/router';
import { AdminAuthGuard } from '../core/services/guards/admin-auth.guard';

import { AdminDashboardComponent } from './admin-dashboard.component';
import { TeamListComponent } from './squads/team/team-list/team-list.component';
import { TeamEditComponent } from './squads/team/team-edit/team-edit.component';
import { PlayerPageComponent } from './squads/player/player-page/player-page.component';
import { PlayerEditComponent } from './squads/player/player-edit/player-edit.component';
import { TeamPageComponent } from './squads/team/team-page/team-page.component';
import { MatchListComponent } from './matches/match-list/match-list.component';
import { MatchPageComponent } from './matches/match-page/match-page.component';
import { MatchEditComponent } from './matches/match-edit/match-edit.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { ArticleEditComponent } from './news/article-edit/article-edit.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventEditComponent } from './events/event-edit/event-edit.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { ArticlePageComponent } from './news/article-page/article-page.component';
import { EventPageComponent } from './events/event-page/event-page.component';
import { UserPageComponent } from './users/user-page/user-page.component';

const adminRoutes: Route[] = [
    {
        path: "",
        component: AdminDashboardComponent,
        canActivate: [ AdminAuthGuard ],
        children: [
            { path: "", pathMatch: "full", redirectTo: "news"},
            { path: "news", component: NewsListComponent },
            { path: "news/new", component: ArticleEditComponent },
            { path: "news/edit/:id", component: ArticleEditComponent },
            { path: "news/:id", component: ArticlePageComponent },
            { path: "events", component: EventListComponent },
            { path: "events/new", component: EventEditComponent },
            { path: "events/edit/:id", component: EventEditComponent },
            { path: "events/:id", component: EventPageComponent },
            { path: "users", component: UserListComponent },
            { path: "users/new", component: UserEditComponent },
            { path: "users/edit/:id", component: UserEditComponent },
            { path: "users/:id", component: UserPageComponent },
            { path: "matches", component: MatchListComponent },
            { path: "matches/edit/:id", component: MatchEditComponent },
            { path: "matches/new", component: MatchEditComponent },
            { path: "matches/:id", component: MatchPageComponent },
            { path: "teams", component: TeamListComponent },
            { path: "teams/edit/:id", component: TeamEditComponent },
            { path: "teams/new", component: TeamEditComponent },
            { path: "teams/:id", component: TeamPageComponent },
            { path: "player/new", component: PlayerEditComponent },
            { path: "player/new/:teamID", component: PlayerEditComponent },
            { path: "player/edit/:id", component: PlayerEditComponent },
            { path: "player/:id", component: PlayerPageComponent }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})


export class AdminRoutingModule { }