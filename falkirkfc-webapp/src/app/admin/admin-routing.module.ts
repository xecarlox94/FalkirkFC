import { NgModule } from "@angular/core";

import { RouterModule, Route } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { TeamListComponent } from './squads/team/team-list/team-list.component';
import { TeamEditComponent } from './squads/team/team-edit/team-edit.component';
import { PlayerPageComponent } from './squads/player/player-page/player-page.component';
import { PlayerEditComponent } from './squads/player/player-edit/player-edit.component';
import { TeamPageComponent } from './squads/team/team-page/team-page.component';

const adminRoutes: Route[] = [
    {
        path: "adminDashboard", component: AdminDashboardComponent, children: [
            { path: "teams", component: TeamListComponent },
            { path: "teams/edit/:id", component: TeamEditComponent },
            { path: "teams/new", component: TeamEditComponent },
            { path: "teams/:id", component: TeamPageComponent },
            { path: "player/new", component: PlayerEditComponent},
            { path: "player/new/:teamID", component: PlayerEditComponent},
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