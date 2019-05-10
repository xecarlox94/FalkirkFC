import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { TeamComponent } from './squads/team/team.component';
import { UserAuthGuard } from '../core/services/guards/user-auth.guard';
import { ProfileViewComponent } from './profile/profile-view/profile-view.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { EventListComponent } from './events/event-list/event-list.component';

const subscriberRoutes: Route[] = [
    {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [ UserAuthGuard ],
        children: 
        [
            { path: "", pathMatch: "full", redirectTo: "profile" },
            { path: "profile", component: ProfileViewComponent },
            { path: "profile/edit", component: ProfileEditComponent },
            { path: "news", component: NewsListComponent },
            { path: "events", component: EventListComponent },
            { path: "teams/:id", component: TeamComponent }
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