import { NgModule } from "@angular/core";
import { RouterModule, Route } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// local routes
const authRoutes: Route[] = [
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent }
]


@NgModule({
    imports: [ RouterModule.forChild(authRoutes) ],
    exports: [ RouterModule ]
})



export class AuthRoutingModule { }