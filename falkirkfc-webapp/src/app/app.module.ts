import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';


import { AppComponent } from './app.component';
import { MainNavComponent } from './base/main-nav/main-nav.component';
import { PolicyModalComponent } from './base/policy-modal/policy-modal.component';
import { UserAuthInterceptor } from './core/services/http-interceptors/user-auth-interceptor.service';
import { AboutUsComponent } from './base/instituition/about-us/about-us.component';
import { CookiePolicyComponent } from './base/instituition/cookie-policy/cookie-policy.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    }
  ],
  declarations: [
    AppComponent,
    MainNavComponent,
    PolicyModalComponent,
    AboutUsComponent,
    CookiePolicyComponent
  ],
  bootstrap: [AppComponent]
})

// Notification badge component in the navbar which takes a subscriber to a notification page

export class AppModule { }
