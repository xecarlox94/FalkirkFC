import { NgModule } from "@angular/core";
import { RouterModule, Route } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard.component';
import { TeamListComponent } from './squads/team/team-list/team-list.component';
import { TeamEditComponent } from './squads/team/team-edit/team-edit.component';
import { PlayerPageComponent } from './squads/player/player-page/player-page.component';
import { PlayerEditComponent } from './squads/player/player-edit/player-edit.component';
import { TeamPageComponent } from './squads/team/team-page/team-page.component';
import { MatchListComponent } from './matches/match-list/match-list.component';
import { MatchPageComponent } from './matches/match-page/match-page.component';
import { MatchEditComponent } from './matches/match-edit/match-edit.component';
import { AdminAuthGuard } from '../core/services/guards/admin-auth.guard';

const adminRoutes: Route[] = [
    {
        path: "adminDashboard",
        component: AdminDashboardComponent,
        canActivate: [ AdminAuthGuard ],
        children: [
            { path: "", pathMatch: "full", redirectTo: "teams"},
            { path: "teams", component: TeamListComponent },
            { path: "teams/edit/:id", component: TeamEditComponent },
            { path: "teams/new", component: TeamEditComponent },
            { path: "teams/:id", component: TeamPageComponent },
            { path: "player/new", component: PlayerEditComponent },
            { path: "player/new/:teamID", component: PlayerEditComponent },
            { path: "player/edit/:id", component: PlayerEditComponent },
            { path: "player/:id", component: PlayerPageComponent },
            { path: "matches", component: MatchListComponent },
            { path: "matches/edit/:id", component: MatchEditComponent },
            { path: "matches/new", component: MatchEditComponent },
            { path: "matches/:id", component: MatchPageComponent }
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