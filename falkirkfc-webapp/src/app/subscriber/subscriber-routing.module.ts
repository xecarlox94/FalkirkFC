import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { TeamComponent } from './squads/team/team.component';
import { UserAuthGuard } from '../core/services/guards/user-auth.guard';

const subscriberRoutes: Route[] = [
    {
        path: "dashboard", component: DashboardComponent, canActivate: [ UserAuthGuard ], canActivateChild: [UserAuthGuard], children: 
        [
            { path: "team", component: TeamComponent }
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