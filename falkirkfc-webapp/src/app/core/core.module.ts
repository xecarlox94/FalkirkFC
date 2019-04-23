import { NgModule } from "@angular/core";
import { MaterialDesignModule } from './modules/material-design.module';

import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from '../auth/auth.module';
import { InstituitionModule } from '../instituition/instituition.module';
import { SubscriberModule } from '../subscriber/subscriber.module';

const modules = [
    AppRoutingModule,
    MaterialDesignModule,
    AuthModule,
    InstituitionModule,
    SubscriberModule
]

@NgModule({
    imports: [ ...modules ],
    exports: [ ...modules ],
    providers: [ ]
})


export class CoreModule { }