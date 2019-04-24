import { NgModule } from "@angular/core";
import { MaterialDesignModule } from './other-core-modules/material-design.module';

import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from '../auth/auth.module';
import { InstituitionModule } from '../instituition/instituition.module';
import { SubscriberModule } from '../subscriber/subscriber.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/http-interceptors/token-interceptor.service';

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
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ]
})


export class CoreModule { }