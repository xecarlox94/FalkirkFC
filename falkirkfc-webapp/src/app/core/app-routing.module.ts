import { NgModule } from "@angular/core";
import { Route, RouterModule, PreloadingStrategy } from "@angular/router";
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';

const appRoutes: Route[] = [
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "**", redirectTo: "login" }
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