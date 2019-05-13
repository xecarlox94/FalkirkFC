import { NgModule } from "@angular/core";
import { Route, RouterModule, PreloadAllModules } from "@angular/router";


import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { AboutUsComponent } from '../base/instituition/about-us/about-us.component';
import { CookiePolicyComponent } from '../base/instituition/cookie-policy/cookie-policy.component';


const appRoutes: Route[] = [
    { path: "", pathMatch: "full", redirectTo: "/login"}, // DELETEEEEEEEEEEEEEEEEE
    { path: "adminDashboard", loadChildren: "../admin/admin.module#AdminModule"},
    { path: "dashboard", loadChildren: "../subscriber/subscriber.module#SubscriberModule" },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "about", component: AboutUsComponent },
    { path: "cookiesPolicy", component: CookiePolicyComponent }
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