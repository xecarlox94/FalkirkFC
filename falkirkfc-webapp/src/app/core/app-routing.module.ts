import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";


import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { AboutUsComponent } from '../instituition/about-us/about-us.component';
import { ContactUsComponent } from '../instituition/contact-us/contact-us.component';
import { CookiePolicyComponent } from '../instituition/cookie-policy/cookie-policy.component';
import { FrequentQuestionsAskedComponent } from '../instituition/frequent-questions-asked/frequent-questions-asked.component';


const appRoutes: Route[] = [
    { path: "", pathMatch: "full", redirectTo: "/login"}, // DELETEEEEEEEEEEEEEEEEE
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "about", component: AboutUsComponent },
    { path: "contact", component: ContactUsComponent },
    { path: "cookiesPolicy", component: CookiePolicyComponent },
    { path: "fqa", component: FrequentQuestionsAskedComponent }
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