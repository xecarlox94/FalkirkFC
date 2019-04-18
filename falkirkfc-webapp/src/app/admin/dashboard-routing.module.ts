import { NgModule } from "@angular/core";
import { RouterModule, Route } from '@angular/router';

const adminRoutes: Route[] = [

]

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})


export class DashboardRoutingModule { }