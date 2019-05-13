import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";


import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { AboutUsComponent } from '../base/instituition/about-us/about-us.component';
import { CookiePolicyComponent } from '../base/instituition/cookie-policy/cookie-policy.component';


const appRoutes: Route[] = [
    { path: "", pathMatch: "full", redirectTo: "/login"}, // DELETEEEEEEEEEEEEEEEEE
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "about", component: AboutUsComponent },
    { path: "cookiesPolicy", component: CookiePolicyComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})



export class AppRoutingModule { }