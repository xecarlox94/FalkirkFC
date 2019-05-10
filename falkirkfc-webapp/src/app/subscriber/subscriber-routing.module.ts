import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { TeamComponent } from './squads/team/team.component';
import { UserAuthGuard } from '../core/services/guards/user-auth.guard';
import { ProfileViewComponent } from './profile/profile-view/profile-view.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';

const subscriberRoutes: Route[] = [
    {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [ UserAuthGuard ],
        children: 
        [
            { path: "", pathMatch: "full", redirectTo: "profile" },
            { path: "profile", component: ProfileViewComponent },
            { path: "profile/edit", component: ProfileEditComponent }
            // { path: "team", component: TeamComponent }
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