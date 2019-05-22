import { NgModule } from "@angular/core";
import { Route, RouterModule, PreloadAllModules } from "@angular/router";


import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { AboutUsComponent } from '../base/about-us/about-us.component';


const appRoutes: Route[] = [
    { path: "", pathMatch: "full", redirectTo: "falkirk"}, // DELETEEEEEEEEEEEEEEEEE
    { path: "falkirk", component: AboutUsComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
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