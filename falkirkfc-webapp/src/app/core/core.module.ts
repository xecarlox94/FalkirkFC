import { NgModule } from "@angular/core";
import { MaterialDesignModule } from './modules/material-design.module';

import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from '../auth/auth.module';
import { InstituitionModule } from '../instituition/instituition.module';
import { SubscriberModule } from '../subscriber/subscriber.module';


@NgModule({
    imports: [
        AppRoutingModule,
        MaterialDesignModule,
        AuthModule,
        InstituitionModule,
        SubscriberModule
    ],
    exports: [
        AppRoutingModule,
        MaterialDesignModule,
        AuthModule,
        InstituitionModule,
        SubscriberModule
    ],
    providers: [ ]
})


export class CoreModule { }