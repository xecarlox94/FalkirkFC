import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';


import { AppComponent } from './app.component';
import { MainNavComponent } from './base/main-nav/main-nav.component';
import { PolicyModalComponent } from './base/policy-modal/policy-modal.component';
import { UserAuthInterceptor } from './core/services/http-interceptors/user-auth-interceptor.service';
import { AboutUsComponent } from './instituition/about-us/about-us.component';
import { ContactUsComponent } from './instituition/contact-us/contact-us.component';
import { CookiePolicyComponent } from './instituition/cookie-policy/cookie-policy.component';
import { FrequentQuestionsAskedComponent } from './instituition/frequent-questions-asked/frequent-questions-asked.component';


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
    ContactUsComponent,
    CookiePolicyComponent,
    FrequentQuestionsAskedComponent
  ],
  bootstrap: [AppComponent]
})

// Notification badge component in the navbar which takes a subscriber to a notification page

export class AppModule { }
