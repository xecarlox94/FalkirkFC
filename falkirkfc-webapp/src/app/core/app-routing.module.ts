import { NgModule } from "@angular/core";
import { Route, RouterModule, PreloadAllModules } from "@angular/router";

import { AboutUsComponent } from '../base/about-us/about-us.component';

const appRoutes: Route[] = [
    { path: "", pathMatch: "full", redirectTo: "falkirk"},
    { path: "falkirk", component: AboutUsComponent },
    { path: "auth", loadChildren: "../auth/auth.module#AuthModule" },
    { path: "adminDashboard", loadChildren: "../admin/admin.module#AdminModule"},
    { path: "dashboard", loadChildren: "../subscriber/subscriber.module#SubscriberModule" }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules})
    ],
    exports: [
        RouterModule
    ]
})



export class AppRoutingModule { }