import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainNavComponent } from './base/main-nav/main-nav.component';
import { PolicyModalComponent } from './base/policy-modal/policy-modal.component';

import { MaterialDesignModule } from './shared/material-design.module';
import { SubscriberModule } from './subscriber/subscriber.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PolicyModalComponent
  ],
  imports: [
    BrowserModule,
    MaterialDesignModule,
    CoreModule,
    AuthModule,
    SubscriberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
