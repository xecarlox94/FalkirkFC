import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { TeamComponent } from './squads/team/team.component';

const subscriberRoutes: Route[] = [
    {
        path: "dashboard", component: DashboardComponent, children: 
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