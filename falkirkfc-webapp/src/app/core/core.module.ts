import { NgModule } from "@angular/core";
import { MaterialDesignModule } from './other-core-modules/material-design.module';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from '../auth/auth.module';

const modules = [
    AppRoutingModule,
    MaterialDesignModule,
    AuthModule
    //SubscriberModule,
    //AdminModule
]

@NgModule({
    imports: [ ...modules ],
    exports: [ ...modules ]
})


export class CoreModule { }