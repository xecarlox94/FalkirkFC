import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainNavComponent } from './base/main-nav/main-nav.component';
import { PolicyModalComponent } from './base/policy-modal/policy-modal.component';

import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PolicyModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// Notification badge component in the navbar which takes a subscriber to a notification page

export class AppModule { }
